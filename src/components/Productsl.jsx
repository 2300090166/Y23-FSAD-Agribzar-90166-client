import React from 'react';
import './Products.css';
const products = [
  {"customer_id":1,"full_name":"Lilla Brixey","age":23,"email":"lbrixey0@creativecommons.org","address":"6 Hallows Street"},
  {"customer_id":2,"full_name":"Birgitta Couves","age":90,"email":"bcouves1@accuweather.com","address":"116 Buell Park"},
  {"customer_id":3,"full_name":"Janice Prydden","age":75,"email":"jprydden2@sakura.ne.jp","address":"828 Logan Alley"},
  {"customer_id":4,"full_name":"Janetta Sainer","age":40,"email":"jsainer3@ox.ac.uk","address":"80 Victoria Pass"},
  {"customer_id":5,"full_name":"Garreth Lantaph","age":96,"email":"glantaph4@a8.net","address":"36141 Del Sol Point"},
  {"customer_id":11,"full_name":"Tate Pahl","age":81,"email":"tpahla@uol.com.br","address":"712 7th Street"},
{"customer_id":12,"full_name":"Christian Megson","age":50,"email":"cmegsonb@bandcamp.com","address":"9727 Oakridge Circle"},
{"customer_id":13,"full_name":"Virgina Tewkesberry","age":40,"email":"vtewkesberryc@ameblo.jp","address":"7 Iowa Road"},
{"customer_id":14,"full_name":"Naoma Beedell","age":35,"email":"nbeedelld@myspace.com","address":"1 Milwaukee Trail"},
{"customer_id":15,"full_name":"Ariel McTerlagh","age":97,"email":"amcterlaghe@gizmodo.com","address":"769 Old Shore Pass"},
{"customer_id":16,"full_name":"Barbara-anne Creebo","age":66,"email":"bcreebof@cloudflare.com","address":"340 Bartelt Crossing"},
{"customer_id":17,"full_name":"Caldwell Nizard","age":51,"email":"cnizardg@dropbox.com","address":"81 Fuller Hill"},
{"customer_id":18,"full_name":"Skippie Walden","age":66,"email":"swaldenh@hud.gov","address":"59656 Vahlen Point"},
{"customer_id":19,"full_name":"Jerrie Doncom","age":72,"email":"jdoncomi@businessweek.com","address":"03 Golf Hill"},
{"customer_id":20,"full_name":"Shurlock McCallam","age":80,"email":"smccallamj@nps.gov","address":"6424 Hudson Alley"},
{"customer_id":21,"full_name":"Gusty Di Franceschi","age":35,"email":"gdik@wunderground.com","address":"5025 Dahle Junction"},
{"customer_id":22,"full_name":"Everard Gianetti","age":61,"email":"egianettil@alexa.com","address":"2 Hagan Park"},
{"customer_id":23,"full_name":"Emory Jacobowits","age":71,"email":"ejacobowitsm@rambler.ru","address":"8 Ridge Oak Terrace"},
{"customer_id":24,"full_name":"Valaree Domelow","age":26,"email":"vdomelown@t.co","address":"73641 Mitchell Pass"},
{"customer_id":25,"full_name":"Marketa Cornbill","age":68,"email":"mcornbillo@cbslocal.com","address":"977 Coleman Point"},
{"customer_id":26,"full_name":"Hope Vaughan","age":43,"email":"hvaughanp@google.cn","address":"894 Lyons Drive"},
{"customer_id":27,"full_name":"Billye Deakin","age":28,"email":"bdeakinq@google.fr","address":"7 Dovetail Junction"},
{"customer_id":28,"full_name":"Zacherie Coverly","age":43,"email":"zcoverlyr@cnbc.com","address":"38 Pepper Wood Center"},
{"customer_id":29,"full_name":"Karola Taggerty","age":100,"email":"ktaggertys@stanford.edu","address":"4769 Loomis Parkway"},
{"customer_id":30,"full_name":"Shantee Gradon","age":97,"email":"sgradont@hp.com","address":"202 Forster Alley"},
{"customer_id":31,"full_name":"Chlo Tixier","age":81,"email":"ctixieru@wordpress.com","address":"7803 Dexter Way"},
{"customer_id":32,"full_name":"Lari Billborough","age":44,"email":"lbillboroughv@umn.edu","address":"09 Coleman Lane"},
{"customer_id":33,"full_name":"Jesus Honisch","age":20,"email":"jhonischw@state.tx.us","address":"22 Hoard Plaza"},
{"customer_id":34,"full_name":"Clementius Cammish","age":59,"email":"ccammishx@ustream.tv","address":"87444 Eagan Road"},
{"customer_id":35,"full_name":"Guendolen Yakovliv","age":67,"email":"gyakovlivy@state.tx.us","address":"1717 Sugar Lane"},
{"customer_id":36,"full_name":"Dorian Armin","age":55,"email":"darminz@utexas.edu","address":"7 Parkside Hill"},
{"customer_id":37,"full_name":"Rossie Rockcliff","age":26,"email":"rrockcliff10@nytimes.com","address":"25 Chinook Pass"},
{"customer_id":38,"full_name":"Zorana Pitkins","age":23,"email":"zpitkins11@state.gov","address":"225 Sunbrook Hill"},
{"customer_id":39,"full_name":"Eugene Scates","age":65,"email":"escates12@nih.gov","address":"42 Cordelia Street"},
{"customer_id":40,"full_name":"Dot Barrowclough","age":95,"email":"dbarrowclough13@geocities.com","address":"13671 Arizona Terrace"},
{"customer_id":41,"full_name":"Sherry Oldershaw","age":52,"email":"soldershaw14@marketwatch.com","address":"6360 Fuller Street"},
{"customer_id":42,"full_name":"Emily Lorincz","age":63,"email":"elorincz15@nytimes.com","address":"5599 Browning Pass"},
{"customer_id":43,"full_name":"Chrisse Cribbott","age":98,"email":"ccribbott16@cargocollective.com","address":"5 Northridge Alley"},
{"customer_id":44,"full_name":"Garret Mityashin","age":83,"email":"gmityashin17@canalblog.com","address":"854 Westridge Way"},
{"customer_id":45,"full_name":"Mallissa Meys","age":25,"email":"mmeys18@joomla.org","address":"20 Veith Lane"},
{"customer_id":46,"full_name":"Kata Spandley","age":88,"email":"kspandley19@wordpress.org","address":"8573 Vermont Drive"},
{"customer_id":47,"full_name":"Sandie Sowrah","age":63,"email":"ssowrah1a@ftc.gov","address":"8400 Mesta Crossing"},
{"customer_id":48,"full_name":"Jonathon Von Brook","age":48,"email":"jvon1b@vkontakte.ru","address":"1033 Sullivan Park"},
{"customer_id":49,"full_name":"Aurilia Wyon","age":59,"email":"awyon1c@hostgator.com","address":"3 Ridgeway Court"},
{"customer_id":50,"full_name":"Niall Nutley","age":33,"email":"nnutley1d@vk.com","address":"199 Longview Plaza"},
{"customer_id":51,"full_name":"Worthy Skuce","age":92,"email":"wskuce1e@stanford.edu","address":"48347 Eastlawn Place"},
{"customer_id":52,"full_name":"Phillip Tunnacliffe","age":46,"email":"ptunnacliffe1f@mtv.com","address":"43 Harper Plaza"},
{"customer_id":53,"full_name":"Margery Bassill","age":85,"email":"mbassill1g@buzzfeed.com","address":"95 Vahlen Way"},
{"customer_id":54,"full_name":"Verne Davson","age":33,"email":"vdavson1h@skyrock.com","address":"50 Grover Avenue"},
{"customer_id":55,"full_name":"Rock Cullinane","age":87,"email":"rcullinane1i@bbb.org","address":"86 Dorton Alley"},
{"customer_id":56,"full_name":"Cherrita Loude","age":79,"email":"cloude1j@freewebs.com","address":"904 Schiller Alley"},
{"customer_id":57,"full_name":"Wye Vaneschi","age":62,"email":"wvaneschi1k@ucla.edu","address":"97066 Northview Plaza"},
{"customer_id":58,"full_name":"Vale Newns","age":100,"email":"vnewns1l@washingtonpost.com","address":"142 Ronald Regan Drive"},
{"customer_id":59,"full_name":"Britt Peace","age":22,"email":"bpeace1m@addtoany.com","address":"26 Helena Terrace"},
{"customer_id":60,"full_name":"Corina Raiston","age":99,"email":"craiston1n@icio.us","address":"67 Anhalt Pass"},
{"customer_id":61,"full_name":"Harold Branigan","age":20,"email":"hbranigan1o@java.com","address":"87 Linden Pass"},
{"customer_id":62,"full_name":"Raoul Orknay","age":84,"email":"rorknay1p@tripod.com","address":"93812 Rutledge Junction"},
{"customer_id":63,"full_name":"Dacia Sworne","age":66,"email":"dsworne1q@themeforest.net","address":"582 Ramsey Center"},
{"customer_id":64,"full_name":"Netta Eberle","age":99,"email":"neberle1r@jiathis.com","address":"04 Cherokee Hill"},
{"customer_id":65,"full_name":"Sheppard Donnelly","age":68,"email":"sdonnelly1s@nydailynews.com","address":"12350 Reindahl Trail"},
{"customer_id":66,"full_name":"Franz Crutchley","age":94,"email":"fcrutchley1t@linkedin.com","address":"90 Tennessee Way"},
{"customer_id":67,"full_name":"Elmo Summerrell","age":31,"email":"esummerrell1u@archive.org","address":"80 Westridge Hill"},
{"customer_id":68,"full_name":"Derwin Redolfi","age":51,"email":"dredolfi1v@who.int","address":"2 Montana Park"},
{"customer_id":69,"full_name":"Abra McTurlough","age":68,"email":"amcturlough1w@ycombinator.com","address":"28 American Way"},
{"customer_id":70,"full_name":"Archer Verecker","age":51,"email":"averecker1x@exblog.jp","address":"235 Bunker Hill Court"},
{"customer_id":71,"full_name":"Dominga Peacham","age":20,"email":"dpeacham1y@theatlantic.com","address":"4207 Sutherland Trail"},
{"customer_id":72,"full_name":"Joice MacRorie","age":32,"email":"jmacrorie1z@youtu.be","address":"6 Ramsey Pass"},
{"customer_id":73,"full_name":"Aguistin Vannuccini","age":32,"email":"avannuccini20@imgur.com","address":"265 Carey Trail"},
{"customer_id":74,"full_name":"Verne Willacot","age":25,"email":"vwillacot21@latimes.com","address":"1640 Haas Park"},
{"customer_id":75,"full_name":"Durante Montilla","age":39,"email":"dmontilla22@mlb.com","address":"212 Grover Pass"},
{"customer_id":76,"full_name":"Theresina Barabich","age":81,"email":"tbarabich23@yellowbook.com","address":"26 Swallow Trail"},
{"customer_id":77,"full_name":"Lexine Wimpey","age":29,"email":"lwimpey24@studiopress.com","address":"7200 Lakewood Gardens Pass"},
{"customer_id":78,"full_name":"Hurley Lamb-shine","age":36,"email":"hlambshine25@netscape.com","address":"34 Vernon Hill"},
{"customer_id":79,"full_name":"Steffi Trencher","age":46,"email":"strencher26@over-blog.com","address":"3497 Mallory Pass"},
{"customer_id":80,"full_name":"Corny Lewis","age":83,"email":"clewis27@homestead.com","address":"39019 Norway Maple Drive"},
{"customer_id":81,"full_name":"Koo Crosbie","age":85,"email":"kcrosbie28@fda.gov","address":"1 Manley Center"},
{"customer_id":82,"full_name":"Bradly Mickan","age":68,"email":"bmickan29@japanpost.jp","address":"6 Eagan Crossing"},
{"customer_id":83,"full_name":"Hugh Devennie","age":26,"email":"hdevennie2a@hibu.com","address":"122 Dottie Parkway"},
{"customer_id":84,"full_name":"Hedwig Carruthers","age":86,"email":"hcarruthers2b@irs.gov","address":"62 Barnett Drive"},
{"customer_id":85,"full_name":"Prudy Seabert","age":30,"email":"pseabert2c@dagondesign.com","address":"03139 Sunbrook Street"},
{"customer_id":86,"full_name":"Jocelin Finney","age":78,"email":"jfinney2d@msu.edu","address":"00227 Maryland Trail"},
{"customer_id":87,"full_name":"Phaedra Anfrey","age":28,"email":"panfrey2e@plala.or.jp","address":"715 Jana Place"},
{"customer_id":88,"full_name":"Stillman Tucsell","age":21,"email":"stucsell2f@blogger.com","address":"55439 Declaration Center"},
{"customer_id":89,"full_name":"Biddy Sidden","age":80,"email":"bsidden2g@sakura.ne.jp","address":"59 Village Road"},
{"customer_id":90,"full_name":"Alverta Collelton","age":97,"email":"acollelton2h@ucsd.edu","address":"8799 Norway Maple Crossing"},
{"customer_id":91,"full_name":"Bryanty Manolov","age":53,"email":"bmanolov2i@yahoo.com","address":"828 Bayside Terrace"},
{"customer_id":92,"full_name":"Tarrah Burnsell","age":89,"email":"tburnsell2j@google.com.au","address":"15 Village Green Center"},
{"customer_id":93,"full_name":"Doyle Trounce","age":83,"email":"dtrounce2k@nyu.edu","address":"903 Mockingbird Point"},
{"customer_id":94,"full_name":"Dino Langhorn","age":54,"email":"dlanghorn2l@people.com.cn","address":"37 Declaration Way"},
{"customer_id":95,"full_name":"Bunny Leele","age":59,"email":"bleele2m@squarespace.com","address":"73 Sheridan Trail"},
{"customer_id":96,"full_name":"Merrilee Reddington","age":42,"email":"mreddington2n@auda.org.au","address":"99134 Hoard Junction"},
{"customer_id":97,"full_name":"Alleen Jell","age":20,"email":"ajell2o@twitter.com","address":"0 Garrison Junction"},
{"customer_id":98,"full_name":"Lezley Bowden","age":98,"email":"lbowden2p@vkontakte.ru","address":"2041 Maywood Avenue"},
{"customer_id":99,"full_name":"Siegfried Hasty","age":88,"email":"shasty2q@imageshack.us","address":"39 Bartillon Way"},
{"customer_id":100,"full_name":"Brynna Ungerecht","age":70,"email":"bungerecht2r@mtv.com","address":"030 Boyd Center"}
];

const Products = () => {
  return (
    <div className="products-container">
      <h1 className="title">Products List</h1>
      <table className="products-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Full Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.customer_id}>
              <td>{product.customer_id}</td>
              <td>{product.full_name}</td>
              <td>{product.age}</td>
              <td>{product.email}</td>
              <td>{product.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
