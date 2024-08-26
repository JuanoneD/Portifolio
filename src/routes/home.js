const projects = require('../models/projects');

module.exports={
    async starPage(req,res){
        res.render('../view/index.ejs');
    },
    async insertProjects(req,res){
        let dados = req.body;

        console.log(dados);
        
        await projects.create({
            Title: dados.ProjectName,
            Description: dados.ProjectDescription,
            LinkProject: dados.ProjectLink,
            ImgProject: dados.ProjectImg
        });
        res.redirect('/');
    }
};