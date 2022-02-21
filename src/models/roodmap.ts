export interface Item {
  name: string;
  description: string;
  following: string;
  avatar: string;
} 

export const dados: Item[] = [];

export interface RoodMap{
 id: string;
 name: string;
 items: Item[];
  created_at: string;  
}



export const roodmaps: RoodMap[] = [
{
 id: "uuid",
 name: "Investindo em Novas Linguagens",
 items:[
   {
     name: "Golang", 
     description: "Foi projetada para os processadores de hoje e muito rápida e um deploy de único arquivo",
     following: "Wesley Willians",
     avatar: "./icons/golang2.png",
   },
   { 
     name: "Nest", 
     description: "Um backend ideal para microserviços com estrutura bem definida",
     following: "Wesley Willians - Fullcycle, Diego Fernandes - Rockectseat",  
     avatar: "./icons/nestjs.png",
   },
   { 
     name: ".Net core 5 & 6",
     description: "Um backend ideal para multi-plataformas definida",
     following: "Luiz Gago - Gago.io, Renato Groffe",
     avatar: "./icons/netcore.png",
   },
 ],
 created_at: "2021-08-12T00:00:00",
},
{
 id: "uuid",
 name: "Estudo de Frameworks e Bibliotecas",
 items: [
   { 
     name: "Apolo", 
     description: "Framework Javascript",
     following: "Diego Fernandes - Rccketseat",
     avatar: "./icons/apollojs.png",
   },
   { 
     name: "NestJs" ,
     description: "Framework Javascript",
     following: "Wesley Willians - Fullcycle",
     avatar: "./icons/nestjs.png",
   },
   { 
     name: "NodeJs" ,
     description: "Framework Javascript",
     following: "Erick Wendel, Rodrigo Branas",
     avatar: "./icons/nodejs.png",
   },
   { 
     name: "React", 
     description: "Biblioteca Javascript",
     following: "Wesley Willians - Fullcycle, Diego Fernabdes - Rocketseat",
     avatar: "./icons/react.png",
   },
   { 
     name: "Next", 
     description: "Framework NodeJs",
     following: "Wesley Willians - Fullcycle, Diego Fernabdes - Rocketseat",
     avatar: "./icons/nextjs.png",
   },  
   { 
     name: "Typescript", 
     description: "Framework Javascript",
     following: "Rodrigo Branas , Erick Wendel",
     avatar: "./icons/typescript.png",
   },
 ],
 created_at: "2021-08-12T00:00:00",
},
{
id: "uuid",
name: "Estudo de Plataformas Cloud e On-premise",
items:[
   { 
     name: "AWS", 
     description: "Cloud Amazon - S3,Lambda..",
     following: "Fabrício Veronez - KubeDev",
     avatar: "./icons/aws.png",
   },
   { 
     name: "AZURE", 
     description: "Microsoft - Serverless..",
     following: "Fabrício Veronez - KubeDev",
     avatar: "./icons/azure.png",
   },
   { 
     name: "Linux", 
     description: "Ubuntu Server 20.04 -Montando Cluster Kubernete Local",
     following: "Fabrício Veronez - KubeDev",
     avatar: "./icons/ubuntu.png",
   },
   { 
     name: "Digital Ocean", 
     description: "Estudo Kubernetes na criação de cluster com terraform",
     following: "Fabrício Veronez - KubeDev",
     avatar: "./icons/digitalocean.png",
   },
   { 
     name: "GPC", 
     description: "Google - Serverless..",
     following: "Fabrício Veronez - KubeDev",
     avatar: "./icons/google2.png",
   },
   { 
     name: "IBM Cloud", 
     description: "Estudo Kubernetes na criação de cluster",
     following: "Fabrício Veronez - KubeDev",
     avatar: "./icons/ibm.png",
   },
 ],
 created_at: "2021-08-12T00:00:00",	
},
{
 id: "uuid",
 name: "Estudo de Padrão Arquitetura",
 items: [
   { 
     name: "Docker",
     description: "Docker com para gerenciar meus containers...",
     following: "Fabrício Veronez - KubeDev",
     avatar: "./icons/docker.png",
   },
   { 
     name: "Kubernetes", 
     description: "Estudo com Fabrício Veronez Pods,replicaset,deploymenty...",
     following: "Fabrício Veronez - KubeDev",
     avatar: "./icons/kubee.png",
   },
   { 
     name: "Microservices",
     description: "Gateway Kong para gerenciar meus microserviços...",
     following: "Fabrício Veronez - KubeDev",
     avatar: "./icons/kongo2.png",
   },
   { 
     name: "Padroes de Projetos", 
     description: "DDD, Message Brocker, MediatR, CQRS e Dominios Ricos...",
     following: "Balta.io, Rodrigo Branas, Luiz Gago - Gago.io",
     avatar: "./icons/cqrs.png",
   },
  ],
  created_at: "2021-08-12T00:00:00",
},
{
 id: "uuid",
 name: "Estudo de Ferramentas de Apoio",
 items: [
   { 
     name: "Python",
     description: "Linguagem para análise de Dados...",
     following: "Fabrício Veronez - KubeDev",
     avatar: "./icons/python.png",
   },
   { 
     name: "RabbitMQ", 
     description: "Essencial para uso em microserviços ...",
     following: "Luiz Gago - Gago.io, Renato Groffe, Wesley Willians",
     avatar: "./icons/rabbitmq.png",
   },
   { 
     name: "Kafka",
     description: "Serviço Streams, podendo substituir RabbitMQ, mas depende de estrutura mais robusta...",
     following: "Wesley Willians - Fullcycle",
     avatar: "./icons/kafka.png",
   },
   { 
     name: "Nginx", 
     description: "Uso para redirecionamento de sites e serviços - usado vom Gateware...",
     following: "Luiz Gago - Gago.io, Wesley Willians - Fullcycle",
     avatar: "./icons/nginx.png",
   },
   { 
     name: "KeyCloak", 
     description: "Autenticação e Autorização de segurança...",
     following: "Luiz Gago - Gago.io, Wesley Willians",
     avatar: "./icons/keycloak2.png",
   },
   { 
     name: "Portainer", 
     description: "Gerenciamento de container do Docker...",
     following: "Fabrício Veronez, Willians - Fullcycle",
     avatar: "./icons/portainer.png",
   },
   { 
     name: "Redis", 
     description: "Uso para cache de leitura e mensageria dados...",
     following: " Luiz Gago - Gago.io, Wesley Willians - Fullcycle",
     avatar: "./icons/redis.png",
   },
   { 
     name: "Terraform", 
     description: "Infra estrutura como código - Levantar Infra automaticamente ",
     following: "Fabrício Veronez - KubeDev",
     avatar: "./icons/terraform.png",
   },
  ],
  created_at: "2021-08-12T00:00:00",
}
];
 
 


 
 
