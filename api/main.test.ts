import request from 'supertest'
import { describe, it, expect } from 'vitest'

import app from './main'

describe('Routes', () => {
    it('should respond with 200 on GET /', async () => {
        const res = await request(app).get('/')
        expect(res.status).toBe(200)
    })
})
