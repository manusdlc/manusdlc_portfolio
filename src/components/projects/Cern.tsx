import withHeader from "./Project";

function Cern() {
    return withHeader("cern", () => (
        <p>C.E.R.N</p>
    ));
}

export default Cern;