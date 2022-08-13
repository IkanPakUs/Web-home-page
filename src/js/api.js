const access_token = proccess.env.GITLAB_ACCESS_KEY;
const user_id = proccess.env.GITLAB_USER_ID;

const getEventFromGitlab = () => {
    return new Promise((resolve, reject) => {

        if (!access_token || !user_id) {
            return reject("Gitlab authentication failed");
        }

        const date_after = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString();

        fetch(`https://gitlab.com/api/v4/issues?assignee_id=${user_id}&scope=all&created_after=${date_after}`, {
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