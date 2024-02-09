import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { writeFileSync } from "fs";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    app.enableCors({origin: "*", methods: ["GET", "POST", "PUT", "DELETE"]});

    const config = new DocumentBuilder()
        .setTitle('Клиника')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .addTag('App')
        .addServer("http://localhost:7000")
        .build()
    const document = SwaggerModule.createDocument(app, config);

    writeFileSync("./swagger-spec.json", JSON.stringify(document));

    SwaggerModule.setup('/api/docs', app, document);

    app.listen(PORT, () => console.log('Server started on port = ', PORT));
}

start()