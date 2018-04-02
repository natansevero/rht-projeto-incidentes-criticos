insert into funcionario(nome, data_admissao) values ('Natan Severo', '26/03/2018');
insert into funcionario(nome, data_admissao) values ('Michelle Oliveira', '20/02/2018');
insert into funcionario(nome, data_admissao) values ('Lucas Duete', '10/01/2018');
insert into funcionario(nome, data_admissao) values ('Alexa Lins', '14/09/2017');
insert into funcionario(nome, data_admissao) values ('Rodrigo Bento', '10/09/2017');

-- Classificacap => Positivo, Negativo / Tipo => Conhecimentos, Habilidades, Atitudes
--1
insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(1, '30/04/2018', 'Negativo', 'Atitudes', 'Destratou o cliente', 'Quando o cliente lhe questionou sobre a troca do produto, ele se alterou ao responder');

insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(1, '12/05/2018', 'Positivo', 'Habilidades', 'Resolvou o problema da planilha de vendas', 'Conseguiu corrigir o problema com a planilha de vendas do mês de Junho reduzindo a quantidade de horas extras do setor em mais de 50% no referido mês');

insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(1, '18/05/2018', 'Positivo', 'Conhecimentos', 'Proposta de curso de vendas', 'Propos o curso de tecnicas de vendas que resultou no aumento de 20% na taxa de vendas');

--2
insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(2, '01/03/2018', 'Positivo', 'Habilidades', 'Organização da documentação da empresa', 'Organizou a documentação de forma que deixou mais simples e rapido a busca dos mesmos, assim facilitando o trabalho dos contadores');

insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(2, '18/03/2018', 'Positivo', 'Habilidades', 'Criação de formulário para o setor de contabilidade', 'Criou um formlário online para cadastro de informações do setor financeiro e agilizou o processo de entrega de resultados em 80%');

insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(2, '04/06/2018', 'Negativo', 'Atitudes', 'Desrespeito com o colega de trablho', 'Ao ser perguntada pelo relatorio do setor de vendas do mês de Junho, a funcionaria em um momento de stress, ofendeu o colega de trabalho com palavras de baixo calão');

--3
insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(3, '18/02/2018', 'Positivo', 'Conhecimentos', 'Ministrou o curso de uma nova tecnologia para a equipe de desenvolvimento', 'Ministrou o curso em uma nova tecnologia para a equipe de desenvolvimento que reduziu os gastos com treinamento dos funcionarios em 10%');

insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(3, '25/03/2018', 'Positivo', 'Conhecimentos', 'Sugeriu a troca de tecnologia', 'Sugeriu a troca de tecnologia da aplicação reduzindo um gasto de 70% em manter os servidores');

insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(3, '01/04/2018', 'Positivo', 'Habilidades', 'Resolveu um bug na aplicação', 'Resolveu um bug da aplicação que resultou em uma melhoria do desempenho do software em 40%');

--4
insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(4, '01/10/2017', 'Negativo', 'Conhecimentos', 'Quebrou a versão do sistema', 'Atualizou a versão da aplicação sem testar resultando num erro que custou 500 reais por minuto parado, totalizando 5000 reais');

insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(4, '01/01/2018', 'Positivo', 'Atitudes', 'Conseguiu convencer os clientes a continuarem com a empresa', 'Após o aumento no preço do sistema o cliente decidiu que nao queria mais o sistema e a funcionaria conseguiu fechar negocio, deixando de perder 50% em lucro mensal');

insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(4, '13/02/2018', 'Positivo', 'Habilidades', 'Treinou os estagiários do setor de TI', 'Se propos a fazer o treinamento dos estagiários reduzindo os gastos com treinadores');

--5
insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(5, '10/10/2017', 'Positivo', 'Habilidades', 'Corrigiu erro mecanico no caminhao de entrega', 'Identificou o problema mecanico antes que o carro saisse evitando gastos com reboque');

insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(5, '24/12/2017', 'Negativo', 'Atitudes', 'Agrediu verbalmente o companheiro de trabalho', 'Apos a perda de um pacote de entrega por parte do colega, o funcionario o agrediu verbalmente ');

insert into incidente(id_funcionario, data, classificacao, tipo, titulo, descricao) values(5, '24/12/2017', 'Negativo', 'Atitudes', 'Agrediu fisicamente o companheiro de trabalho', 'Apos a perda de um pacote de entrega e agressoes verbais de ambas as partes, o funcionário agrediu fisicamente o outro, resultando na quebra de um braço');