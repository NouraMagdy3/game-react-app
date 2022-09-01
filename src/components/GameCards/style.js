const generateStyle = (parameters) => ({
    container: {
       // backgroundColor: parameters.bgColor,
       backgroundColor: "rgb(35 150 204 / 7%)",
        borderRaduis: "7px",
        width: "36vw",
        padding: "4px 40px",
        boxShadow: "0 2px 10px 0 #ddd",
        margin: "20px"
    },
    gameCardsClass:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    gameTitle:{
        color: "#63798f",
        fontWeight: "500"
    },
    cartBtn:{
        float: "left",
        marginTop: "0",
        marginBottom: "23px"
    }
});

export default generateStyle;