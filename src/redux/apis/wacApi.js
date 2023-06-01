import request from "../utils/request";

export function getInformations() {
    return () => {
        request.get(`/clubs/wac`, {
            Headers: { 'Content-Type': 'application/json' },
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}