export const tmaModeDescription: { [key: string]: string } = {
    test: '测试邮箱地址是否为黑/白名单',
    white: '管理白名单',
    block: '管理黑名单',
};

export const telegramCommands = [
    {
        command: 'id',
        description: '/id - 获取用户聊天ID',
    },
    {
        command: 'test',
        description: `/test - ${tmaModeDescription.test}`,
    },
    {
        command: 'white',
        description: `/white - ${tmaModeDescription.white}`,
    },
    {
        command: 'block',
        description: `/block - ${tmaModeDescription.block}`,
    },
];
