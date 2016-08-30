# Referencing computation results from another document

Referencing the answers from document 1 in document 2 is possible and quite
easy. To reference computation results we have to jump through some hoops.

The "trick" is to have the same fields in document 2 as in document 1. We then
configure those fields to have the same value as in document 1 by referencing
them. Because we then have the same fields and answers in document 2 we can
again do computations and conditional content with them in document 2.

## Hiding the copied fields

We (of course) don't want to show those copied fields so we hide them in a
conditional content section that will never be true:

    pragma:tool==screening

This basically says: if the current document is a screening document then
show this section. If it is not: hide it. So just pick a type that the current
document is not.

See attached.
