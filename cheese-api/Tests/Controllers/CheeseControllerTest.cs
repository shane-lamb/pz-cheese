using System;
using System.Collections.Generic;
using System.Linq;
using CheeseApi.Controllers;
using CheeseApi.DataContext;
using CheeseApi.Models;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;

namespace Tests.Controllers
{
    public class CheeseControllerTest
    {
        private CheeseDbContext _db;
        private CheeseController _controller;
        
        [SetUp]
        public void Setup()
        {
            _db = GetDbContext();
            _controller = new CheeseController(_db);
        }

        [Test]
        public void Get()
        {
            _db.Cheeses.Add(GetTestCheese());
            _db.SaveChanges();
            
            var result = _controller.Get();

            result.Should().BeEquivalentTo(new List<Cheese> {GetTestCheese()});
        }
        
        [Test]
        public void Create()
        {
            var result = _controller.Create(GetTestCheese());

            result.Should().BeEquivalentTo(GetTestCheese());
            _db.Cheeses.ToList().Should().BeEquivalentTo(new List<Cheese> {GetTestCheese()});
        }
        
        [Test]
        public void Update()
        {
            _db.Cheeses.Add(GetTestCheese());
            _db.SaveChanges();

            var updated = new CheeseRequest
            {
                Name = "Updated Name",
                Color = "Updated Color",
                ImageUrl = "https://google.com/updated-image-url.jpg",
                PricePerKilo = (decimal) 9.99
            };
            _controller.Update(1, updated);

            _db.Cheeses.Find(1L).Should().BeEquivalentTo(updated.ToCheese(1));
        }
        
        [Test]
        public void Delete()
        {
            _db.Cheeses.Add(GetTestCheese());
            _db.SaveChanges();
            
            _controller.Delete(1);

            _db.Cheeses.ToList().Should().BeEmpty();
        }
        
        private static CheeseDbContext GetDbContext()
        {
            var options = new DbContextOptionsBuilder<CheeseDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;
            var databaseContext = new CheeseDbContext(options);
            databaseContext.Database.EnsureCreated();
            return databaseContext;
        }

        private static Cheese GetTestCheese()
        {
            return new CheeseRequest {
                Name = "Brie",
                Color = "Cream",
                ImageUrl = "https://cheese.com/media/img/cheese/Brie_PDCo3RG.jpg",
                PricePerKilo = (decimal) 49.99
            }.ToCheese(1);
        }
    }
}
