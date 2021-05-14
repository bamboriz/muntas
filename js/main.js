Moralis.initialize("sMwAKyfdwx4JkYK4lx3zT32iF2kpbOcGFrJk7cL3"); // Application id from moralis.io
Moralis.serverURL = "https://pttovpllffdn.moralis.io:2053/server"; //Server url from moralis.io

getUser = async () => {
    const user = await Moralis.User.current();
    if (user) {
        console.log(user)
        return user
    } else {  
        if (window.location.pathname != '/' && window.location.pathname != '/index.html')
        window.location.href = '/index.html'
    }
}

loginMetamask = async () => {
    try {
        user = await Moralis.Web3.authenticate();
        if (! user.get('address2chain')){
            user.set('address2chain', {'eth': user.get("ethAddress")})
            await user.save()
        }
        if (user) window.location.href = '/portfolio.html';

    } catch (error) {
        console.log(error);
    }
}

logout = async () => {
    Moralis.User.logOut().then(() => {
        const user = Moralis.User.current();  // this will now be null
        if (!user) window.location.href = '/index.html';
      });
}

