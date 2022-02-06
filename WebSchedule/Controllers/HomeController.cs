﻿using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using WebSchedule.Models;
using WebSchedule.Schedule.Getter;

namespace WebSchedule.Controllers
{
    /// <summary>
    /// Класс-контроллер всех страниц, доступных из заголовка.
    /// </summary>
    public class HomeController : Controller
    {
        #region Область: Поля.
        /// <summary>
        /// Внутреннее поле, содержащее объект, нужный для логирования.
        /// </summary>
        private readonly ILogger<HomeController> logger;

        /// <summary>
        /// Внутреннее поле, содержащее данные о среде, где развернуто приложение.
        /// </summary>
        private readonly IHostEnvironment env;
        #endregion

        #region Область: Конструктор.
        /// <summary>
        /// Конструктор класса.
        /// </summary>
        /// <param name="logger">Объект, нужный для логирования.</param>
        /// <param name="environment">Объект, содержащий данные об окружении, где развернут сайт.</param>
        public HomeController(ILogger<HomeController> logger, IHostEnvironment environment)
        {
            this.logger = logger;
            env = environment;

            HierarchyModel.InitializeAllGroups(environment.ContentRootPath);
        }
        #endregion

        #region Область: Методы.
        /// <summary>
        /// Событие, срабатывающее при вызове из разметки.
        /// </summary>
        /// <returns>Новая страница с именем "Index".</returns>
        public IActionResult MainPage()
        {
            return View("MainPage");
        }

        /// <summary>
        /// Событие, срабатывающее при вызове из разметки.
        /// </summary>
        /// <returns>Новая страница с именем "Privacy".</returns>
        public IActionResult Info()
        {
            return View("Info");
        }

        /// <summary>
        /// Событие, срабатывающее при вызове из разметки.
        /// </summary>
        /// <returns>Новая страница.</returns>
        public IActionResult Settings()
        {
            return View("Settings");
        }

        /// <summary>
        /// Событие, срабатывающее при сохранении настроек.
        /// <br/>
        /// Сохраняет параметры и перемещает пользователя обратно на главную страницу.
        /// </summary>
        /// <param name="useDb">Использовать базу данных для получения значений?</param>
        /// <param name="selectUnsecure">Выбирать небезопасные значения?</param>
        /// <returns>Главная страница.</returns>
        public IActionResult SaveSettings(String useDb, String selectUnsecure)
        {
            ScheduleApi.UseDataBase = useDb == "on";
            ScheduleApi.SelectUnsecure = selectUnsecure == "on";

            return View("MainPage");
        }

        /// <summary>
        /// Событие, срабатывающее при вызове из разметки.
        /// <br/>
        /// Переводит пользователя к выбору дня получения расписания для случайной группы.
        /// </summary>
        /// <returns>Новая страница выбора дня.</returns>
        public IActionResult Random()
        {
            Int32 ind = new Random().Next(0, HierarchyModel.AllGroups.Count);

            return View("~/Views/Schedule/Day.cshtml", new ScheduleModel(HierarchyModel.AllGroups[ind]));
        }

        /// <summary>
        /// Событие, срабатывающее при вызове из разметки.
        /// </summary>
        /// <param name="groupName">Группа, которую хочет найти пользователь.</param>
        /// <returns>Новая страница поиска с результатами.</returns>
        public IActionResult Search(String groupName)
        {
            SearchModel model = new(groupName);

            if (model.Options.Count == 1)
            {
                return View("~/Views/Schedule/Day.cshtml", new ScheduleModel(model.Options.First()));
            }

            return View("Search", new SearchModel(groupName));
        }

        /// <summary>
        /// Событие, возникающее при ошибке.
        /// </summary>
        /// <returns>Создает новую страницу ошибки.</returns>
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        #endregion
    }
}