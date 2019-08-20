var info = {
    categories: [
      {
          id: 0,
          name: "Programming & Tech",
          description: "Get all the technical bells and whistles without paying for a programming degree",
          class: "bg-secondary",
          productsList:[
              {
                  image : "http://th2tech.com/wp-content/uploads/2014/11/IT-business-support-new.jpg",
                  tittle : "Support & IT"
              },
              {
                  image : "https://secureservercdn.net/166.62.111.64/45c.98b.myftpupload.com/wp-content/uploads/2018/04/Web-Design-Image-1.jpg?time=1566003881",
                  tittle : "Web Design"
              },
              {
                image : "https://content.thriveglobal.com/wp-content/uploads/2019/02/Mobile_Dashboard.png",
                tittle : "Mobile Development"
              },
              {
                image : "data:image/png;base64,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",
                tittle : "Ecommerce"
              },
              {
                image : "https://miro.medium.com/max/1200/1*RWHxIXnOrhsOAxmlDmCpDg.png",
                tittle : "Chatbots"
              },
              {
                image : "https://instabug.com/blog/wp-content/uploads/2017/09/Featured.jpg",
                tittle : "Game Development"
              },
          ]
      },
      {
          id: 1,
          name: "Graphics and design",
          description: "A single place, millions of creative talents. From logos, packaging and presentations, we've got them all",
          class: "bg-dark",
          productsList:[]
      },
      {
          id: 2,
          name: "Digital marketing",
          description: "Don't stay behing. Update and upgrade your business online.",
          class: "bg-info",
          productsList:[]
      }
    ],
    comments:[
      {
        id:0,
        tittle: "Payment Protection, Guaranteed",
        text: "Payment is released to the freelancer once you’re pleased and approve the work you get."
      },
      {
        id:1,
        tittle: "Know The Price Upfront",
        text: "Find any service within minutes and know exactly what you’ll pay. No hourly rates, just a fixed price."
      },
      {
        id:2,
        tittle: "We’re Here For You 24/7",
        text: "Κοῖος is here for you, anything from answering any questions to resolving any issues, at any time."
      }
    ]
};

export default info;