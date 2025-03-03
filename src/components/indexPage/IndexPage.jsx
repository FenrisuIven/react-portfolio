import './indexPage.css'
import Header from '../header/Header'
import Profile from '../profile/Profile'

const userInfo = {
  username: "fenvi",
  shortInfo: "wwwwwwwwwwwwww wwwwwwwwwwww wwwwwwwwww",
  description: "Suspendisse vulputate lacus at efficitur euismod. Nullam imperdiet volutpat velit, in facilisis diam tempor ut. Proin orci velit, egestas sit amet est sit amet, egestas vulputate metus. Aenean volutpat, nulla eget cursus tincidunt, dolor ante sollicitudin eros, vitae pharetra sapien mi vitae nibh. Etiam bibendum dignissim felis, vitae finibus quam aliquet non. In commodo ipsum vitae aliquet mattis. Pellentesque molestie justo odio, in dignissim odio finibus eget. Nullam pulvinar quis nisl sed bibendum. Praesent ac dui odio. Morbi vitae vulputate mi, eu congue massa. Integer laoreet in dui ac bibendum. Curabitur urna tellus, placerat id tempus id, tempus nec lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus.\nDuis nisl justo, fermentum et accumsan et, hendrerit non odio. Duis et pretium arcu. Sed nec nulla ex. Vivamus aliquet elit ac pretium ultrices. Donec cursus lorem nisi, vel tristique orci volutpat at. Pellentesque maximus ornare ante id porttitor. Integer eleifend libero a justo malesuada tempus. Quisque ut nisl vel erat sollicitudin feugiat vel elementum tortor. Praesent vel pharetra ante, id elementum purus. Suspendisse ultricies ipsum ut nunc facilisis posuere. Etiam id erat mollis, tempor velit ut, blandit mi.\nVestibulum feugiat dictum velit, sit amet gravida nisi consequat vitae. Phasellus pulvinar nisl a ante congue euismod. Curabitur pharetra dui risus, vel placerat eros scelerisque fringilla. Etiam a enim ut lectus pellentesque ornare a non ipsum. Pellentesque malesuada tortor turpis, id commodo nibh dapibus in. Quisque placerat augue non tortor consectetur elementum. Maecenas vehicula nunc sed efficitur ultrices. Donec id posuere elit. Morbi dictum justo sed augue consequat tincidunt.\nSed mollis sem sed massa tempus, at aliquet libero mollis. Aliquam mauris purus, porttitor ut feugiat in, bibendum sit amet sem. Fusce quis sapien in augue varius mollis eu et enim. Etiam elementum nisi in erat rutrum, vitae placerat urna interdum. In ac leo non sapien efficitur sodales id vel sapien. Vivamus ultrices nunc vitae diam tincidunt, vulputate fringilla arcu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum nisi sit amet nisl semper facilisis. Fusce sollicitudin diam felis, sed suscipit odio ultricies quis. Aliquam erat volutpat. Praesent at cursus turpis, at volutpat dolor. Curabitur elementum, neque ac blandit volutpat, neque tortor varius tellus, ut blandit tellus tellus a neque. Phasellus at molestie metus, at rhoncus massa.\nCras urna urna, fringilla vel fermentum at, eleifend vitae nisl. Etiam vel lacus leo. Sed sodales elementum turpis, venenatis sollicitudin dolor lacinia id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc dapibus aliquam ipsum, vitae euismod nibh vehicula nec. Vestibulum consectetur lorem lectus, non rutrum felis interdum id. Mauris id accumsan erat, at sodales magna. Integer vitae ex sem."
}

function IndexPage() {
  return (
    <>
      <Header />
      <main>
        <Profile username={userInfo.username} shortInfo={userInfo.shortInfo} description={userInfo.description} />
      </main>
    </>
  )
}

export default IndexPage
