const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

// Parser za JSON podatke
app.use(bodyParser.json());

// Parser za podatke iz formi
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'ucka.veleri.hr',
    user: 'lcelcner',
    password: '11',
    database: 'lcelcner'
  });
  
app.use(express.urlencoded({ extended: true }));
  
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  app.listen(port, () => {
    console.log("Server running at port: " + port);
});

app.get("/api/knjige", (req, res) => {
    connection.query("SELECT * FROM knjige", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });
  
  app.post("/api/rezerv_knjige", (req, res) => {
    const data = req.body;
    rezervacija = [[date.today, data.id_knjiga, data.id_korisnik]]
    connection.query("INSERT INTO rezervacija (datum, knjiga, korisnik) VALUES ?", [rezervacija], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });


  app.get("/api/rezerv_knjige/:id_korisnik", (req, res) => {
    connection.query("SELECT * FROM knjiga, rezervacija, korisnik WHERE knjiga.id=rezervacija.knjiga and korisnik.id=rezervacija.korisnik AND korisnik.id=id_korisnik", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });


   
  app.get("/api/rezerv_knjige/:id_knjiga", (req, res) => {
    connection.query("SELECT * FROM knjiga, rezervacija, korisnik WHERE knjiga.id=rezervacija.knjiga and korisnik.id=rezervacija.korisnik AND knjiga.id=id_knjiga", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });


     //dohvat korinsika koji imaju određenu knjigu(po id-ju)
  app.get("/api/korisnici/:id_knjiga", (req, res) => {
    connection.query("SELECT k.id, k.ime, k.prezime, k.korime FROM Korisnik k JOIN Rezervacija r ON k.id = r.korisnik JOIN Knjiga knj ON r.knjiga = knj.id WHERE knj.id = id_knjiga", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });

//
  app.get("/api/stanjeKnjiga/", (req, res) => {
    connection.query(" SELECT stanje FROM knjiga", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });