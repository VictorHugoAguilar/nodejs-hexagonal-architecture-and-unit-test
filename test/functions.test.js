const ormUser = require('../domain/orm/orm-user');

describe('Post Endpoints', () => {
    it('should info of a USER', async () => {
        const res = await ormUser.GetById("35a3f13d-7e94-4df6-8996-ccb1f4a77295");
        expect(res.name).toEqual("Javier Eduardo");
    });
});