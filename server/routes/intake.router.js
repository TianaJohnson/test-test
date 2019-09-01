const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// create new customer
router.post('/', (req, res, next) => {
    console.log(req.body);
    if (req.isAuthenticated()) {
        const queryText = `INSERT INTO "customer_info"
                     ("customers_full_name", 
                      "pro_nouns", 
                      "email",
                      "phone_number", 
                      "customer_notes") 
                      VALUES ($1, $2, $3, $4, $5) RETURNING "id";`;
        pool.query(queryText, [req.body.customers_full_name,
        req.body.pro_nouns,
        req.body.email,
        req.body.phone_number,
        req.body.customer_notes])
            .then((results) => {
                // Insert empty project for new customer
                const anotherQuery = `INSERT INTO "project"
                     ("client_id", 
                      "user_id") 
                      VALUES ($1, $2);`;
                pool.query(anotherQuery, [results.rows[0].id,
                req.user.id]).then(() => {
                    console.log('server side intake Post');
                    res.sendStatus(201);
                }).catch(error => {
                    res.sendStatus(500);
                })

            })
            .catch((error) => {
                console.log('Something went wrong in intake post', error);

                res.sendStatus(500);
            });
    }
});
// I learned that by joining these two tables it makes it so my archive button doesnt work.
//JOIN "project" ON "customer_info"."id" = "project"."client_id"
//display active customers
router.get('/', (req, res) => {
    console.log('in GET ')
    if (req.isAuthenticated()) {
        console.log('req.user:', req.user);
        pool.query(`SELECT * FROM "customer_info" 
                    WHERE "is_active" = TRUE 
                    ORDER BY "id" DESC;`)
            .then(results => {
                console.log(results.rows)
                res.send(results.rows)
            })
            .catch(error => {
                console.log('Error making SELECT for customer info database:', error);
                res.sendStatus(500);
            });
    } else {
        // They are not authenticated.
        res.sendStatus(403);
    }
});

//get specific customer information by id
router.get('/:id', (req, res) => {
    console.log('in GET id ')
    if (req.isAuthenticated()) {
        console.log('req.user:', req.user);
        pool.query(`SELECT * FROM "customer_info"
        WHERE "id" = $1;`, [req.params.id])
            .then(results => {
                console.log(results.rows[0])
                res.send(results.rows[0])
            })
            .catch(error => {
                console.log('Error making SELECT for customer info database:', error);
                res.sendStatus(500);
            });
    } else {
        // They are not authenticated.
        res.sendStatus(403);
    }
});

//update customer information by id
router.put('/update/:id', (req, res) => {
    console.log('in put', req.params.id);
    if (req.isAuthenticated()) {
        console.log('in authentication put', req.params.id);
        const queryText = `UPDATE "customer_info"
                             SET "customers_full_name" = $1,
                                 "pro_nouns" = $2,
                                 "email" = $3,
                                 "phone_number" = $4,
                                 "customer_notes" = $5
                             WHERE "id" = $6;`;
        pool.query(queryText, [req.body.customers_full_name,
                                req.body.pro_nouns,
                                req.body.email,
                                req.body.phone_number,
                                req.body.customer_notes,
                                req.body.id])
            .then(() => {
                console.log('server side Put');
                res.sendStatus(201);
            })
            .catch((error) => {
                console.log('Something Went wrong in Put', error);

            });
    }
})

// archive customer information by id
router.put('/archive/:id', (req, res) => {
    console.log('in customer activity  put', req.params.id);
    if (req.isAuthenticated()) {
        console.log('in authentication put', req.params.id);
        const queryText = `UPDATE "customer_info"             
                           SET "is_active" = false 
                           WHERE "id" = $1;`;
        pool.query(queryText, [req.params.id])
            .then(() => {
                console.log('server side project Put');
                res.sendStatus(201);
            })
            .catch((error) => {
                console.log('Something Went wrong in Put archive', error);

            });
    }
})

module.exports = router;