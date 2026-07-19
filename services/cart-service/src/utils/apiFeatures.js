class APIFeatures {

    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    search() {

        if (this.queryString.search) {

            this.query = this.query.find({

                name: {
                    $regex: this.queryString.search,
                    $options: "i"
                }

            });

        }

        return this;
    }

    filter() {

        let queryObj = { ...this.queryString };

        const removeFields = [
            "search",
            "page",
            "limit",
            "sort"
        ];

        removeFields.forEach(field => delete queryObj[field]);

        if (queryObj.category) {

            this.query = this.query.find({

                category: queryObj.category

            });

        }

        if (queryObj.minPrice || queryObj.maxPrice) {

            this.query = this.query.find({

                finalPrice: {

                    ...(queryObj.minPrice && {
                        $gte: Number(queryObj.minPrice)
                    }),

                    ...(queryObj.maxPrice && {
                        $lte: Number(queryObj.maxPrice)
                    })

                }

            });

        }

        return this;
    }

    sort() {

        if (this.queryString.sort) {

            this.query = this.query.sort(this.queryString.sort);

        } else {

            this.query = this.query.sort("-createdAt");

        }

        return this;
    }

    paginate(resultPerPage = 12) {

        const currentPage = Number(this.queryString.page) || 1;

        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;

    }

}

module.exports = APIFeatures;