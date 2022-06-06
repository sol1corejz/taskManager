import {Box, Grid, Paper} from "@mui/material";
import styled from "@emotion/styled";
import MenuControl from "./components/menu/MenuControl";
import MyMenuListItem from "./components/menu/MyMenuListItem";
import {BrowserRouter} from "react-router-dom";
import FileContent from "./components/FileContent";
import Login from "./components/Login/Login";
import useToken from "./useToken";

function App() {
    const {token, setToken} = useToken();

    const Item = styled(Paper)(() => ({
        textAlign: 'center',
    }));

    if (!token) {
        return <Login setToken={setToken}/>
    }
    return (
        <BrowserRouter>
            <Box sx={{display: "flex", justifyContent: "center", backgroundColor: "#383a59", height: "937px"}}>
                <Grid container>
                    <Grid item md={3} sx={{margin: "1%"}}>
                        <Item sx={{height: "900px", overflowY: "auto"}}>
                            <MenuControl/>
                            <MyMenuListItem/>
                        </Item>
                    </Grid>
                    <Grid item md={8.64}
                          sx={{marginTop: "1%", marginRight: "1%", marginBottom: "1%", overflow: "none"}}>
                        <Item sx={{height: "900px"}}>
                            <FileContent sx={{height: "100%"}}/>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            }>
        </BrowserRouter>
    );
}

export default App;
