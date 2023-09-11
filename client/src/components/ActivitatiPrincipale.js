import React from "react";
import {Button} from "reactstrap";
export default function ButoanePrincipale(){
    return (
    <div>
        <Button
            color="primary"
            outline
            className="buton1"
        >
            Liga Legando
        </Button>

        <Button
            color="primary"
            outline
        >
            Joc cu impuscaturi
        </Button>
    </div>
    );
}