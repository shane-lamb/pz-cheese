FROM node:12.13.1 AS build-front
WORKDIR /app

# npm install
COPY cheese-front/package.json .
RUN npm install --silent

# copy source files
COPY cheese-front/public ./public
COPY cheese-front/src ./src
COPY cheese-front/tsconfig.json .

# do build
RUN ./node_modules/.bin/react-scripts build


FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-api
WORKDIR /app

# copy csproj and restore as distinct layers
COPY cheese-api/*.sln .
COPY cheese-api/CheeseApi/*.csproj ./CheeseApi/
COPY cheese-api/Tests/*.csproj ./Tests/
RUN dotnet restore

# copy everything else and build app
COPY cheese-api/CheeseApi ./CheeseApi
COPY --from=build-front app/build ./CheeseApi/wwwroot
WORKDIR /app/CheeseApi
RUN dotnet publish -c Release -o out


FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS runtime
WORKDIR /app
COPY --from=build-api /app/CheeseApi/out .
ENTRYPOINT ["dotnet", "CheeseApi.dll"]
