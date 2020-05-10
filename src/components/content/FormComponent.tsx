import * as React from "react";
import {Button, TextField} from "@material-ui/core";


interface FormProps {
    teams: (e: any) => void;
}
export const FormComponent = (recipe: FormProps) => {
    return (
        <form onSubmit={recipe.teams}>
            <TextField label="Id ligi" size="small" variant="outlined" type="number" name="teamName"/>
            <Button variant="contained" color="primary" type="submit" >Pobierz druzyny</Button>
        </form>
    )
};
