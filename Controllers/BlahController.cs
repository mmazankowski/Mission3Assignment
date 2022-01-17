﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission3Assignment.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mission3Assignment.Controllers
{
    public class BlahController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index ()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalcPage ()
        {
            return View(); 
        }

        [HttpPost]
        public IActionResult GradeCalcPage (GradeCalcModel model)
        {
            return View(); 
        }   
    }
}
