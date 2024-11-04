const express = require('express');
const router = express.Router();
const Job = require('../models/Job')();
const { where } = require('sequelize');

// Rota de teste
router.get('/test', (req, res) => {
    res.send('deu certo');
});

// destalhe da vaga
router.get('/view/:id', (req,res) => Job.findOne({
    where: {id: req.params.id}
}).then(job =>{
    res.render('view', {
        job
    });
}).catch(err => console.log(err)));


// form da rota de envio
router.get('/add', (req, res)=>{
    res.render('add');
})

// add job via post 
router.post('/add', async (req, res) => {
    try {
      const { title, salary, company, description, email, new_job } = req.body;
      await Job.create({ title, description, salary, company, email, new_job });
      res.redirect('/');
    } catch (err) {
      console.log(err);
      res.status(500).send('Erro ao criar vaga');
    }
  });

module.exports = router