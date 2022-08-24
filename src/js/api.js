// "{"access_token":"your-access-token","user_id":your-user-id}"

const config = localStorage.getItem('config');

const getEventFromGitlab = () => {
    return new Promise((resolve, reject) => {

        const {access_token, user_id} = typeof config == "string" ? JSON.parse(config) : {};

        if (!access_token || !user_id) {
            return reject("Gitlab authentication failed");
        }

        let sync_time = localStorage.getItem('last_sync') ?? null;

        sync_time = typeof sync_time == "string" ? JSON.parse(sync_time) : sync_time;

        fetch(`https://gitlab.com/api/v4/issues?assignee_id=${user_id}&scope=all&created_after=${sync_time.time}`, {
            headers: {
                authorization: "Bearer " + access_token,
            },
            method: 'GET',
        }).then(async (res) => {
            const result = await res.json().then(result => result);

            return resolve(result);
        }).catch(err => console.log(err));
    });
}

export {
    getEventFromGitlab
}