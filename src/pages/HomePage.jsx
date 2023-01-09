import React from "react";

const HomePage = () => {
  return (
    <div>
        <div className="presentation"></div>
        <div className="par">
          <h3>A CHOCOLATIER WITH YOUR WELL-BEING AT HEART</h3>
          <span>From pharmacist to Chocolatier, the Neuhaus family has always kept people’s well-being and contentment at heart. The family opened its original Neuhaus Boutique in Brussels’ exquisite Galerie de la Reine in 1857 and the shop continues to thrive there today.</span>
        </div>

        <div className="presentation2">
          <div className="presentation2_one">
              <img src={require("./img_page/photo_2023-01-06_03-22-21.jpg")} alt="" />
              <span>Jean Neuhaus was a Swiss with Italian roots. When he arrived in Switzerland, Jean's family changed its name from "Casanova" to "Neuhaus". He wanted to become a doctor to help people and so he went to study medicine in Grenoble. He failed twice, mainly because he could not bear the sight of blood. He then moved and settled in Brussels in 1857. In the same year he opened a pharmacy in the prestigious Queen's Gallery.</span>
          </div>
          <div className="presentation2_two"><img src={require("./img_page/jeanneuhaus.webp")} alt="" /></div>
        </div>
        <div className="presentation3">
          <div>
            <img style={{
                width: "600px",
                height: "600px"
            }} src="https://www.neuhauschocolates.com/dw/image/v2/BFRH_PRD/on/demandware.static/-/Library-Sites-NeuhausSharedLibrary/default/dw208e5eb0/Content%20Images/pralines.gif"></img>
            </div>
          <div>
            <h3>INVENTOR OF THE BELGIAN PRALINE</h3>
            <span>
To delight his customers in the apothecary, Jean Neuhaus first thought about covering medicines with the finest chocolate. In 1912, his grandson evolved this idea into the Belgian praline as we know it today: chocolate filled with delight instead of medicine.</span>
          </div>
        </div>

    </div>
    )
};

export default HomePage;
