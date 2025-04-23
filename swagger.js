import swagger from "swagger-jsdoc";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Expenses Tracker API",
      version: "1.0.0",
      description: "API documentation for your Node.js application",
    },
    components : {
      securitySchemes: {
        bearerAuth : {
          type : 'http',
          scheme : 'bearer',
          bearerFormat : 'JWT',
          value : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODA3MzYyYTNkZTJmYjUxYWY4NTE5YTYiLCJpYXQiOjE3NDUzMDMwODJ9.J7Ho2bwACCrJwSWTa10q_oafS51TyLHwREk5YG54DpY'
        },
        
      }
    },
    
  },
  apis: ["./routes/*.js", "./models/*.js"],
};

const swaggerSpec = swagger(options);
export default swaggerSpec;
