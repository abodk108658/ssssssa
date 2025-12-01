// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1420820092761014363",
        serverId: "1323926281162588190",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "online",
        },
        selfMute: true,
    },
];
