

export const TodoAction = (action,value = "") => {

        switch (action) {
            case "add":
                return (value.trim().length >2) &&
                {
                    type: "add",
                    paylot: {
                        id: Math.random()*10000,
                        desc: value,
                        done: false
                    }
                }

            case "delete":
                return {
                    type: "delete",
                    payload: value
                }

            case "toggle":
                return {
                    type: "toggle",
                    payload: value
                }

            default:
                break;
        }
    }

