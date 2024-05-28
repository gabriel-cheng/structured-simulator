class HomeCtrl {
    home(req, res)  {
        return res.status(200).render("home");
    }
}

export default HomeCtrl
