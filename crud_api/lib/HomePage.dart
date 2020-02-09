import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'model/Usuario.dart';

class HomePage extends StatefulWidget {
  var usuarios = List<Usuario>();

  // construtor
  HomePage() {
    usuarios = [];
    usuarios.add(Usuario('Flavio', 'flavio@gmail.com', 'flavio'));
    usuarios.add(Usuario('Jaqueline', 'jaque@gmail.com', 'jaque'));
    usuarios.add(Usuario('Alguem', 'alguem@gmail.com', 'flavio'));
  }

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: Text('Nome')),
        body: ListView.builder(
          itemCount: widget.usuarios.length,
          itemBuilder: (BuildContext context, int i) {
            final user = widget.usuarios[i];
            return CheckboxListTile(
              title: Text(user.nome),
              value: true,
              onChanged: (value) {},
            );
          },
        ));
  }
}
