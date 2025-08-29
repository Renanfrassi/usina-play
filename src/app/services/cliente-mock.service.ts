import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteMock {

  clientes = [
    {
      id: 1,
      nome: "João Neto",
      imagem: "../assets/avatars/Joao.png",
      programas: [
        { nome: "Bicicleta", imagem: "../assets/imagens/bike.jpg" },
        { nome: "Corrida", imagem: "../assets/imagens/corrida.jpg" },
        { nome: "Yoga", imagem: "../assets/imagens/yoga.jpg" }
      ],
      personal: [
        { nome: "Bicicleta", imagem: "../assets/imagens/bike.jpg", subTexto : 'Continuar treinando' },
        { nome: "Corrida", imagem: "../assets/imagens/corrida.jpg", subTexto : 'Próximo treino' },
        { nome: "Yoga", imagem: "../assets/imagens/yoga.jpg", subTexto : 'Treino marcado'}
      ],
      conteudos: [
        { nome: "", imagem: "" },
        { nome: "", imagem: "" },
        { nome: "", imagem: "" },
      ],
      nivel: 'rosa'
    },
    {
      id: 2,
      nome: "Cláudio Júnio",
      imagem: "../assets/avatars/Claudio.png",
      programas: [
        { nome: "Bicicleta", imagem: "../assets/imagens/bike.jpg" },
        { nome: "Corrida", imagem: "../assets/imagens/corrida.jpg" },
        { nome: "Yoga", imagem: "../assets/imagens/yoga.jpg" },
        { nome: "Musculação", imagem: "../assets/imagens/musculacao.jpg" },
        { nome: "Crossfit", imagem: "../assets/imagens/crossfit.jpg" },

      ],
      personal: [
        { nome: "Bicicleta", imagem: "../assets/imagens/bike.jpg", subTexto : 'Continuar treinando' },
        { nome: "Corrida", imagem: "../assets/imagens/corrida.jpg", subTexto : 'Próximo treino' },
        { nome: "Yoga", imagem: "../assets/imagens/yoga.jpg" },
        { nome: "Musculação", imagem: "../assets/imagens/musculacao.jpg"},
        { nome: "Crossfit", imagem: "../assets/imagens/crossfit.jpg"},
      ],
      conteudos: [
        { nome: "", imagem: "" },
        { nome: "", imagem: "" },
        { nome: "", imagem: "" },
        { nome: "", imagem: "" },
      ],
      nivel: 'roxo'
    },
    {
      id: 3,
      nome: "Leandro Santos",
      imagem: "../assets/avatars/Leandro.png",
      programas: [
        { nome: "Bicicleta", imagem: "../assets/imagens/bike.jpg" },
        { nome: "Corrida", imagem: "../assets/imagens/corrida.jpg" },
        { nome: "Yoga", imagem: "../assets/imagens/yoga.jpg" },
        { nome: "Crossfit", imagem: "../assets/imagens/crossfit.jpg" },

      ],
      personal: [
        { nome: "Bicicleta", imagem: "../assets/imagens/bike.jpg", subTexto : 'Continuar treinando' },
        { nome: "Corrida", imagem: "../assets/imagens/corrida.jpg",  subTexto : 'Próximo treino'},
        { nome: "Yoga", imagem: "../assets/imagens/yoga.jpg",  subTexto : '' },
        { nome: "Crossfit", imagem: "../assets/imagens/crossfit.jpg",  subTexto : '' },

      ],
      conteudos: [
        { nome: "", imagem: "" },
        { nome: "", imagem: "" },
        { nome: "", imagem: "" },
        { nome: "", imagem: "" },
      ],
      nivel: 'verde'
    }
  ];

  getClientes() {
    return this.clientes;
  }

  getClientePorId(id: number) {
    return this.clientes.find(c => c.id === id);
  }
}
