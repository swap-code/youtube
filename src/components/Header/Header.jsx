import React from "react";
import {
  GridColumn,
  Grid,
  Image,
  GridRow,
  Icon,
  Button,
} from "semantic-ui-react";
import "./Header.scss";
import SearchComponent from "./SearchComponent/SearchComponent";
import { useDispatch } from "react-redux";
import { setIsMenuOpen } from "../../utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch(setIsMenuOpen());
  };
  return (
    <div>
      <Grid className="header">
        <GridRow style={{ display: "flex", alignItems: "center" }}>
          <GridColumn width={4}>
            <div className="header__logo">
              <div style={{ cursor: "pointer" }} onClick={handleMenuToggle}>
                <Icon name="align justify" size="large" color="grey" />
              </div>
              <Icon name="youtube" size="large" color="red" />
              <span>YouTube</span>
            </div>
          </GridColumn>
          <GridColumn width={8}>
            <SearchComponent />
          </GridColumn>
          <GridColumn width={4}>
            <div className="header__user">
              <Button
              title="create"
                className="header__user--button"
                icon="plus"
                size="large"
                color="grey"
                name="create"
              />
              <Button
                className="header__user--button"
                icon="th list"
                size="large"
                color="grey"
              />
              <Button
                className="header__user--button"
                icon="bell"
                size="large"
                color="grey"
              />
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
};
export default Header;
