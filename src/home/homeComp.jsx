import { Component } from "react";
import Notifications from "../uiContent/notifications/notificationCard";
import ProductCard from "../uiContent/products/productCard";
import ProfileCard from "../uiContent/profile/profileCard";

class Home extends Component{
    render(){
        return(
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <ProfileCard name="bhargavi" city="hyd"  role="developer"/>
        <ProfileCard name="sowmya" city="hyd" role="developer"/>
        <ProfileCard name="kalyani" city="hyd" role="developer"/>
        <Notifications type="liked" name="bhargavi"/>
        <Notifications type="commented" name="sravani"/>
        <Notifications type="shared" name="sujatha"/>
        <Notifications type="saved" name="divya"/>
        <ProductCard>
          <h1>mobile</h1>
          <p>samsung-s24</p>
          <h2>hello</h2>
          <h2>vivo</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum consectetur ex veritatis. Officia tenetur cum earum doloremque excepturi labore est! Fugit nulla cum, maxime eveniet consequuntur recusandae assumenda ipsam non?</p>
        </ProductCard>
        </div>


        )
    }
}
export default Home;

