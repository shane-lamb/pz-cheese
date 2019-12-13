FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.sln .
COPY CheeseApi/*.csproj ./CheeseApi/
COPY Tests/*.csproj ./Tests/
RUN dotnet restore

# copy everything else and build app
COPY CheeseApi/. ./CheeseApi/
WORKDIR /app/CheeseApi
RUN dotnet publish -c Release -o out


FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS runtime
WORKDIR /app
COPY --from=build /app/CheeseApi/out ./
ENTRYPOINT ["dotnet", "CheeseApi.dll"]
