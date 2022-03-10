const bodyJsonSchema = {
    type: 'object',
    additionalProperties: false,
    required: [
        'username',
        'password',
        'email'
    ],
    properties: {
        username: {
            type: 'string', nullable: true, allOf: [
                { transform: ['trim', 'escape'] },
                { minLength: 5 },
            ]
        },
        password: { type: 'number' },
        email: {
            type: 'string',
            allOf: [
                { type: 'string', format: 'email' }
            ],
        }
    }
}


module.exports = {
    bodyJsonSchema
}