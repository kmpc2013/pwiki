<p align="center">
  <img src="https://github.com/kmpc2013/pwiki/assets/53223968/31d838fe-94a1-429f-b623-f46015498c44" alt="P/WIKI Logo" width="200" style="border-radius:50%">
</p>

## <p align="center">Uma Aplicação de Documentação com Frontend Interativo</p>

<p align="center">P/WIKI é uma plataforma inovadora projetada para ajudar profissionais de Tecnologia da Informação a superar obstáculos ao demonstrar sua competência. Seja você um recém-formado na área ou um veterano com vasta experiência, P/WIKI oferece uma solução abrangente para criar e gerenciar portfólios interativos focada em cada profissional de Tecnologia da Informação que enfrenta desafios ao apresentar suas habilidades e experiências aos potenciais empregadores ou clientes.</p>

### <p align="center">Tecnologias Utilizadas</p>

- **MySQL**: Armazenamento seguro e eficiente dos documentos e dados.
- **Node.js**: Backend poderoso e flexível para fornecer acesso via API.
- **Angular**: Frontend interativo e dinâmico para gerenciar documentos e portfólio.
- **Docker Compose**: Containerização para agilidade e portabilidade no deploy da aplicação.

### <p align="center">Exemplos</p>

<p align="center">FrontEnd Administrativo</p>
<p align="center" style="display: block">
  <img src="https://github.com/kmpc2013/pwiki/assets/53223968/fa5c2e9d-829d-403e-be5b-83ef870d98ba" alt="Exemplo 1">
</p>
<p align="center">Portfólio</p>
<p align="center" style="display: block">
  <img src="https://github.com/kmpc2013/pwiki/assets/53223968/6887db9c-dc9b-4c3c-9386-f477952831ba" alt="Exemplo 2">
</p>
<p align="center">Consumo do backend</p>
<p align="center" style="display: block">
  <img src="https://github.com/kmpc2013/pwiki/assets/53223968/36045bf1-a32a-4860-baaa-d2c090efe875" alt="Exemplo 3">
</p>

## <p align="center">Utilização</p>
### <p align="center">Docker</p>
Para utilizar a aplicação via docker, basta ter a Docker Engine e o Docker Compose instalado na maquina que iniciará os containeres. Caso tenha dúvidas de como realizar a instalação aqui estão dois links para auxilialo:
- **Docker engine**: https://docs.docker.com/engine/install/
- **Docker compose**: https://docs.docker.com/compose/install/

Após as devidas instalações, basta baixar o arquivo **docker-compose.yml** presente na raiz desse projeto, ou clicando diretamente neste link: https://raw.githubusercontent.com/kmpc2013/pwiki/main/docker-compose.yml
Entre no diretório em que baixou o arquivo via linha de comando, seja Linux ou Windows e execute o comando:
```
docker compose up -d
```

Isso instanciara tres containers:
- **pwikidatabase**: MySQL servido como banco de dados da aplicação
- **pwikiback**: Node.JS servindo como backend da aplicação, sendo acessivel via API
- **pwikifront**: Angular com o portar administrativo da aplicação bem como um modelo de portfólio

Caso queira utilizar o modelo de portfólio, precisará baixar todo o projeto do git e editar os seguintes arquivos conforme necessidade:
- **index.html**: Para ajustar o título da página
- **aboutme.component.html**: Para editar as informações pessoais
- **experiences.component.ts**: Para editar as experiencias profissionais

Após finalizar a edição, precisará realizar o build da aplicação e gerar suas próprias imagens do docker:
```
docker compose -f "docker-compose-build.yml" up -d --build
```

### <p align="center">Como Contribuir</p>

<p align="center">
  P/WIKI não visa lucro; é uma iniciativa comunitária para capacitar profissionais de TI a demonstrar suas habilidades de forma eficaz por meio de portfólios interativos. Se você deseja contribuir para o P/WIKI, sinta-se à vontade para abrir problemas, enviar solicitações de recebimento ou sugerir melhorias. Sua colaboração é fundamental para ajudar a comunidade de TI a prosperar!
</p>
