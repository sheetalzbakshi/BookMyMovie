import React from "react";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useConfig } from "../../config";
import Typography from "@material-ui/core/Typography";

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

const Register = () => {
    const classes = useStyles();
    const config = useConfig();

    console.log(config);

    const [values, setValues] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        contactNo: "",
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        passwordError: false,
        contactNoError: false,
        registered: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({
            ...values,
            registered: false,
            [prop]: event.target.value,
            [prop + "Error"]:
                event.target.value === undefined ||
                event.target.value.trim() === ""
                    ? true
                    : false,
        });
    };

    const handleSubmit = (event) => {
        console.log(event);

        const tryRegister = async () => {
            setValues({
                ...values,
                registered: false,
            });

            try {
                const params = {
                    email_address: values.email,
                    first_name: values.firstName,
                    last_name: values.lastName,
                    mobile_number: values.contactNo,
                    password: values.password,
                };
                let response = await fetch(
                    config.baseUrl + `/${config.register}`,
                    {
                        method: "POST",
                        headers: {
                            Accept: "application/json;charset=UTF-8",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(params)                       
                    }
                );
                if (response.ok) {
                    setValues({
                        ...values,
                        registered: true,
                    });
                }
            } catch (e) {}
        };
        tryRegister();
    };

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="firstName">First Name *</InputLabel>
                <Input
                    id="firstName"
                    value={values.firstName}
                    onChange={handleChange("firstName")}
                />
                <div style={{ color: "red", fontSize: "0.75rem" }}>
                    {values.firstNameError ? "required" : ""}
                </div>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="lastName">Last Name *</InputLabel>
                <Input
                    id="lastName"
                    value={values.lastName}
                    onChange={handleChange("lastName")}
                />
                <div style={{ color: "red", fontSize: "0.75rem" }}>
                    {values.lastNameError ? "required" : ""}
                </div>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="email">Email *</InputLabel>
                <Input
                    id="email"
                    value={values.email}
                    onChange={handleChange("email")}
                />
                <div style={{ color: "red", fontSize: "0.75rem" }}>
                    {values.emailError ? "required" : ""}
                </div>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="password">Password *</InputLabel>
                <Input
                    id="password"
                    value={values.password}
                    type="password"
                    onChange={handleChange("password")}
                />
                <div style={{ color: "red", fontSize: "0.75rem" }}>
                    {values.passwordError ? "required" : ""}
                </div>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="contactNo">Contact No *</InputLabel>
                <Input
                    id="contactNo"
                    value={values.contactNo}
                    onChange={handleChange("contactNo")}
                />
                <div style={{ color: "red", fontSize: "0.75rem" }}>
                    {values.contactNoError ? "required" : ""}
                </div>
            </FormControl>
            <FormControl className={classes.formControl}>
                <Typography>
                    {values.registered
                        ? "Registration Successful. Please Login!"
                        : ""}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={handleSubmit}
                >
                    Register
                </Button>
            </FormControl>
        </div>
    );
};

export default Register;
