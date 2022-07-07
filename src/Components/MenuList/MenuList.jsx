import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";
import { Badge, IconButton, MenuItem } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ReceiptIcon from "@mui/icons-material/Receipt";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import { useContext } from "react";
import { cartContext } from "../../Contexts/cartContext";
import GroupsIcon from "@mui/icons-material/Groups";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FaceIcon from "@mui/icons-material/Face";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import { authContext } from "../../Contexts/authContext";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function MenuList() {
  const navigate = useNavigate();
  const { admin } = useContext(authContext);

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { count, getCart } = React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);

  const list = anchor => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <ListItem onClick={() => navigate("/")}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={() => navigate("/about")}>
          <ListItemButton>
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={() => navigate("/service")}>
          <ListItemButton>
            <ListItemIcon>
              <ContentCutIcon />
            </ListItemIcon>
            <ListItemText primary={"Service"} />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={() => navigate("/contacts")}>
          <ListItemButton>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary={"Contact"} />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={() => navigate("/profile")}>
          <ListItemButton>
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={() => navigate("/cart")}>
          <ListItemButton>
            <ListItemIcon>
              <Badge badgeContent={count} color="error">
                <ShoppingCartIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary={"Cart"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />

      <List>
        <ListItem onClick={() => navigate("/shop")}>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingBagIcon />
            </ListItemIcon>
            <ListItemText primary={"Shop"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem onClick={() => navigate("/team")}>
          <ListItemButton>
            <ListItemIcon>
              <TwoWheelerIcon />
            </ListItemIcon>
            <ListItemText primary={"Crew"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem onClick={() => navigate("/careers")}>
          <ListItemButton>
            <ListItemIcon>
              <ConnectWithoutContactIcon />
            </ListItemIcon>
            <ListItemText primary={"Careers"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />

      <List>
        {admin ? (
          <>
            <ListItem onClick={() => navigate("/add-product")}>
              <ListItemButton>
                <ListItemIcon>
                  <AddCircleIcon />
                </ListItemIcon>
                <ListItemText primary={"Add product"} />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={() => navigate("/add-member")}>
              <ListItemButton>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary={"Add member"} />
              </ListItemButton>
            </ListItem>
          </>
        ) : null}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon
              sx={{ color: grey[500], width: "30px", height: "30px" }}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default MenuList;
