import React from "react";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useConfig } from "../../config";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignContent: "nowrap",
        justifyContent: "center",
    },
    formControl: {
        marginLeft: theme.spacing(8),
        marginRight: theme.spacing(8),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        minWidth: 120,
    },
    button: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(8),
        marginRight: theme.spacing(8),
    },
}));

const Login = ({ onLoggedIn }) => {
    const classes = useStyles();
    const config = useConfig();

    const [values, setValues] = React.useState({
        username: "",
        password: "",
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        const tryLogin = async () => {
            try {
                let myHeaders = new Headers();

                myHeaders.append("Content-Type", "application/json");
                myHeaders.append(
                    "Authorization",
                    "Basic " +
                        window.btoa(values.username + ":" + values.password)
                );

                let response = await fetch(
                    config.baseUrl + `/${config.login}`,
                    {
                        method: "POST",
                        headers: myHeaders,
                    }
                );
                if (response.ok && onLoggedIn !== undefined) onLoggedIn();
            } catch (e) {console.log(e)}
        };
        tryLogin();
    };

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="username">Username *</InputLabel>
                <Input
                    id="username"
                    value={values.username}
                    onChange={handleChange("username")}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="password">Password *</InputLabel>
                <Input
                    id="password"
                    value={values.password}
                    type="password"
                    onChange={handleChange("password")}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={handleSubmit}
                >
                    Login
                </Button>
            </FormControl>
        </div>
    );
};

export default Login;
