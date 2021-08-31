using Microsoft.AspNetCore.Mvc;
using System;
using System.Data;

namespace CalculatorMVC.Controllers
{
    [Controller]
    public class CalculatorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("[controller]/Evaluate/{expressionToCalculate}")]
        public ActionResult<double> Calculate([FromRoute] string expressionToCalculate)
        {
            string str = expressionToCalculate.Replace('÷', '/');
            var result = Convert.ToDouble(new DataTable().Compute(str, null));
            return Ok(result);
        }
    }
}
