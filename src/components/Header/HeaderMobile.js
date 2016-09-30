import React from 'react'
import Search from './Search'

var HeaderMobile = React.createClass({
  getInitialState() {
    return {
      mobileMenuVisible: false,
    }
  },

  toggleMobileMenu() {
    this.setState({
      mobileMenuVisible: !this.state.mobileMenuVisible
    })
  },


  togleRadio(e) {
    if(e.currentTarget.parentElement.querySelector('ul').style.display === "block") {
      e.currentTarget.parentElement.querySelector('ul').style.display="none";
    } else {
      e.currentTarget.parentElement.querySelector('ul').style.display="block";
    }
  },

  render: function () {


    var mobileMenuIconClass = '';
    var mobileMenuStyle = {'display': 'none'};
    if(this.state.mobileMenuVisible) {
      mobileMenuIconClass = 'open';
      mobileMenuStyle = {'display': 'block'};
    }

    return (
        <div className="header" id="header-mobile">
          <div className="mobileHeaderTop">
            <div id="menu-icon" onClick={this.toggleMobileMenu} className={mobileMenuIconClass}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img alt="Enternity Ready Logo" src="http://www.eternityready.com/images/logo.png" />
            <Search />
          </div>
            <nav id="main-menu" style={mobileMenuStyle}>
              <ul className="menu" rel="Main Menu">
                <li>
                  <a href="#">
                    <span>Categories</span>
                  </a>
                  <ul className="column">
                    <li>
                      <a href="http://www.eternityready.com/category.php">Faith &amp; Ministry</a>
                    </li>
                    <li>
                      <a href="http://www.eternityready.com/category.php">Kids &amp; Family</a>
                    </li>
                    <li>
                      <a href="http://www.eternityready.com/category.php">Bible Prophecy</a>
                    </li>
                    <li>
                      <a href="http://www.eternityready.com/category.php">News &amp; Politics</a>
                    </li>
                    <li>
                      <a href="http://www.eternityready.com/category.php">Movies &amp; Music</a>
                    </li>
                    <li>
                      <a href="http://www.eternityready.com/category.php">Health &amp; Sports</a>
                    </li>
                    <li>
                      <a href="http://www.eternityready.com/category.php">Gaming &amp; Technology</a>
                    </li>
                    <li>
                      <a href="http://www.eternityready.com/topvideos.php">Top-Channels</a>
                    </li>
                    <li>
                      <a href="http://eternityready.com/category.php">Premium Channels</a>
                    </li>
                    <li>
                      <a href="#">Movie Trailers</a>
                    </li>
                    <li>
                      <a href="http://www.eternityready.com/category.php">International Channels</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#"><span>Radio Channels</span></a>
                  <ul>
                    <li>
                      <a href="#" onTouchStart={this.togleRadio}><span>Channels 11, 219 - 230</span></a>
                      <ul>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=b177d8248">Channel 111 - Word Broadcasting</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=25abc196c">Channel 219 - CC Music Radio</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=62351a9f3">Channel 220 - Alive In Chirst Radio</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=77524660d">Channel 221 - WBCL 90.3</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=2e1470946">Channel 222 - The Life FM</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=a72b4801a">Channel 223 - The Joy FM</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=1311b4ff0">Channel 224 - The Bridge Radio</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=9fe666f24">Channel 225 - The Blast Radio</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=3f6f0c78f">Channel 226 - Rejoin AM - WDRJ</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=89b94213d">Channel 227 - Praise Radio</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=03d1b16c8">Channel 228 - Moody Radio</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=f3ddd6245">Channel 229 - Living Voice Radio</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=a0c367c97">Channel 230 - KSBJ89.3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onTouchStart={this.togleRadio}><span>Channels 231-240</span></a>
                      <ul>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=a1d580110">Channel 231 - KNVBC</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=4290ff8f5">Channel 232 - KFSI</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=dbc93ce9b">Channel 233 - KDIA 1640AM</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=5a15bc8eb">Channel 234 - His Kids Radio</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=74ad4fff4">Channel 235 - Gospel Experience Radio</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=13e436158">Channel 236 - Cross Pop Radio</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=f42e5dfa3">Channel 237 - Christian Rock Radio</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=9cd90cfdc">Channel 238 - Christian Power Praise Radio</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=4e5760a48">Channel 239 - Christian Classic Rock Radio</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=8533c0367">Channel 240 - Christian Hard Rock Radio</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onTouchStart={this.togleRadio}><span>Channels 241-245</span></a>
                      <ul>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=f98662248">Channel 241 - KLTY 94.</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=d9443849f">Channel 242 - K Love</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=4fc5b5ba2">Channel 243 - My Bridge FM</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=b32c73b6b">Channel 244 - Hebrew Nation Radio</a>
                        </li>
                        <li>
                          <a href="http://www.eternityready.com/embed.php?vid=676feb7eb">Channel 245 - Ref Net</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#"><span>Radio Categories</span></a>
                  <ul className="column">
                    <li>
                      <a href="#">Talk Radio</a>
                    </li>
                    <li>
                      <a href="#">Hymns</a>
                    </li>
                    <li>
                      <a href="#">Contemporary</a>
                    </li>
                    <li>
                      <a href="#">Gospel</a>
                    </li>
                    <li>
                      <a href="#">Christian Pop</a>
                    </li>
                    <li>
                      <a href="#">Christian Rock</a>
                    </li>
                    <li>
                      <a href="#">Eternity Ready Radio</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#"><span>Tools</span></a>
                  <ul className="column">
                    <li>
                      <a href="http://www.eternityready.com/channels/lineup.pdf">TV Line UP</a>
                    </li>
                    <li>
                      <a href="#">All Channels</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
        </div>
    );
  },
});

module.exports = HeaderMobile;
