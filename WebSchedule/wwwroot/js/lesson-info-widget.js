﻿/* Регион #1: Область с вызывающими функциями. */

/**
 * Обновляет элементы, записывая в них данные о парах.
 * Запускает прочие функции, что в итоге приводит к обновлению данных в отправленных элементах.
 * 
 * @param {any} currentLesson Элемент, в который будут отправлены данные о текущей паре.
 * @param {any} nextLesson Элемент, в который будут отправлены данные о времени конца текущего события.
 */
function updateInfoAboutLessons(currentLesson, nextLesson)
{
    let dateInfo = getNormalDate();

    let firstContent = calculateCurrentLesson(dateInfo);
    let secondContent = calculateCurrentLessonEndTime(dateInfo);

    insertLessonsInfoIntoElements(currentLesson, nextLesson, { firstContent, secondContent });
}

/**
 * Вставляет в отправленные элементы данные о текущей паре и времени до начала следующей.
 * 
 * @param {any} currentLesson Элемент, отображающий данные о текущей паре. 
 * @param {any} nextLesson Элемент, отображающий данные о времени до начала следующей пары.
 * @param {any} values Объект, содержащий данные о парах, которые будут вставлены в элементы.
 */
function insertLessonsInfoIntoElements(currentLesson, nextLesson, values)
{
    currentLesson.innerHTML = values.firstContent;
    nextLesson.innerHTML = values.secondContent;
}
/* Конец региона. */

/* Регион #2: Функции расчета текущей пары. */

/**
 * Вычисляет информацию о текущей паре.
 * 
 * @param {any} dateInfo Информация о дате и времени для расчетов.
 * 
 * @returns Информация о текущей паре.
 */
function calculateCurrentLesson(dateInfo)
{
    let currentLesson = "Значение отсутствует.";

    if (checkToDayIsWorking(dateInfo))
    {
        if (dateInfo.date.day == 3)
        {
            currentLesson = getLessonNumberForWednesday(getMinutesFromTime(dateInfo.time.hour, dateInfo.time.minute));
        }

        else if (dateInfo.date.day == 6)
        {
            currentLesson = getLessonNumberForSaturday(getMinutesFromTime(dateInfo.time.hour, dateInfo.time.minute));
        }

        else
        {
            currentLesson = getLessonNumberForOtherDays(getMinutesFromTime(dateInfo.time.hour, dateInfo.time.minute));
        }
    }

    else
    {
        currentLesson = "Сейчас: Выходной день.";
    }

    return currentLesson;
}

/**
 * Рассчитывает пару по времени для среды.
 * 
 * @param {any} minutesInfo Информация о текущем времени в минутах.
 * 
 * @returns Номер пары.
 */
function getLessonNumberForWednesday(minutesInfo)
{
    let currentLesson;

    // 0 пара.
    if (getMinutesFromTime(7, 50) <= minutesInfo && minutesInfo <= getMinutesFromTime(9, 20))
    {
        currentLesson = "Сейчас: 0 пара.";
    }

    else if (getMinutesFromTime(9, 20) < minutesInfo && minutesInfo < getMinutesFromTime(9, 30))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 1 пара.
    else if (getMinutesFromTime(9, 30) <= minutesInfo && minutesInfo <= getMinutesFromTime(11, 05))
    {
        currentLesson = "Сейчас: 1 пара.";
    }

    else if (getMinutesFromTime(11, 05) < minutesInfo && minutesInfo < getMinutesFromTime(11, 15))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 2 пара.
    else if (getMinutesFromTime(11, 15) <= minutesInfo && minutesInfo <= getMinutesFromTime(13, 30))
    {
        currentLesson = "Сейчас: 2 пара.";
    }

    else if (getMinutesFromTime(13, 30) < minutesInfo && minutesInfo < getMinutesFromTime(13, 35))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 3 пара.
    else if (getMinutesFromTime(13, 35) <= minutesInfo && minutesInfo <= getMinutesFromTime(15, 10))
    {
        currentLesson = "Сейчас: 3 пара.";
    }

    else if (getMinutesFromTime(15, 10) < minutesInfo && minutesInfo < getMinutesFromTime(15, 20))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // Классный час.
    else if (getMinutesFromTime(15, 20) <= minutesInfo && minutesInfo <= getMinutesFromTime(16, 00))
    {
        currentLesson = "Сейчас: Классный час.";
    }

    else if (getMinutesFromTime(16, 00) < minutesInfo && minutesInfo < getMinutesFromTime(16, 10))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 4 пара.
    else if (getMinutesFromTime(16, 10) <= minutesInfo && minutesInfo <= getMinutesFromTime(17, 30))
    {
        currentLesson = "Сейчас: 4 пара.";
    }

    else if (getMinutesFromTime(17, 30) < minutesInfo && minutesInfo < getMinutesFromTime(17, 40))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 5 пара.
    else if (getMinutesFromTime(17, 40) <= minutesInfo && minutesInfo <= getMinutesFromTime(18, 50))
    {
        currentLesson = "Сейчас: 5 пара.";
    }

    else if (getMinutesFromTime(18, 50) < minutesInfo && minutesInfo < getMinutesFromTime(19, 00))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 6 пара.
    else if (getMinutesFromTime(19, 00) <= minutesInfo && minutesInfo <= getMinutesFromTime(20, 10))
    {
        currentLesson = "Сейчас: 6 пара.";
    }

    // Внеучебное время.
    else
    {
        currentLesson = "Сейчас: Внеучебное время.";
    }

    return currentLesson;
}

/**
 * Рассчитывает пару по времени для субботы.
 * 
 * @param {any} minutesInfo Информация о текущем времени в минутах.
 * 
 * @returns Номер пары.
 */
function getLessonNumberForSaturday(minutesInfo)
{
    let currentLesson;

    // 0 пара.
    if (getMinutesFromTime(8, 00) <= minutesInfo && minutesInfo <= getMinutesFromTime(9, 20))
    {
        currentLesson = "Сейчас: 0 пара.";
    }

    else if (getMinutesFromTime(9, 20) < minutesInfo && minutesInfo < getMinutesFromTime(9, 30))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 1 пара.
    else if (getMinutesFromTime(9, 30) <= minutesInfo && minutesInfo <= getMinutesFromTime(10, 50))
    {
        currentLesson = "Сейчас: 1 пара.";
    }

    else if (getMinutesFromTime(10, 50) < minutesInfo && minutesInfo < getMinutesFromTime(11, 00))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 2 пара.
    else if (getMinutesFromTime(11, 00) <= minutesInfo && minutesInfo <= getMinutesFromTime(12, 20))
    {
        currentLesson = "Сейчас: 2 пара.";
    }

    else if (getMinutesFromTime(12, 20) < minutesInfo && minutesInfo < getMinutesFromTime(12, 30))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 3 пара.
    else if (getMinutesFromTime(12, 30) <= minutesInfo && minutesInfo <= getMinutesFromTime(13, 50))
    {
        currentLesson = "Сейчас: 3 пара.";
    }

    else if (getMinutesFromTime(13, 50) < minutesInfo && minutesInfo < getMinutesFromTime(14, 00))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 4 пара.
    else if (getMinutesFromTime(14, 00) <= minutesInfo && minutesInfo <= getMinutesFromTime(15, 20))
    {
        currentLesson = "Сейчас: 4 пара.";
    }

    else if (getMinutesFromTime(15, 20) < minutesInfo && minutesInfo < getMinutesFromTime(15, 30))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 5 пара.
    else if (getMinutesFromTime(15, 30) <= minutesInfo && minutesInfo <= getMinutesFromTime(16, 50))
    {
        currentLesson = "Сейчас: 5 пара.";
    }

    else if (getMinutesFromTime(16, 50) < minutesInfo && minutesInfo < getMinutesFromTime(17, 00))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 6 пара.
    else if (getMinutesFromTime(17, 00) <= minutesInfo && minutesInfo <= getMinutesFromTime(18, 20))
    {
        currentLesson = "Сейчас: 6 пара.";
    }

    // Внеучебное время.
    else
    {
        currentLesson = "Сейчас: Внеучебное время.";
    }

    return currentLesson;
}

/**
 * Рассчитывает пару по времени для остальных (обычных) дней.
 * 
 * @param {any} minutesInfo Информация о текущем времени в минутах.
 * 
 * @returns Номер пары.
 */
function getLessonNumberForOtherDays(minutesInfo)
{
    let currentLesson;

    // 0 пара.
    if (getMinutesFromTime(7, 30) <= minutesInfo && minutesInfo <= getMinutesFromTime(9, 20))
    {
        currentLesson = "Сейчас: 0 пара.";
    }

    else if (getMinutesFromTime(9, 20) < minutesInfo && minutesInfo < getMinutesFromTime(9, 30))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 1 пара.
    else if (getMinutesFromTime(9, 30) <= minutesInfo && minutesInfo <= getMinutesFromTime(11, 05))
    {
        currentLesson = "Сейчас: 1 пара.";
    }

    else if (getMinutesFromTime(11, 05) < minutesInfo && minutesInfo < getMinutesFromTime(11, 15))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 2 пара.
    else if (getMinutesFromTime(11, 15) <= minutesInfo && minutesInfo <= getMinutesFromTime(13, 30))
    {
        currentLesson = "Сейчас: 2 пара.";
    }

    else if (getMinutesFromTime(13, 30) < minutesInfo && minutesInfo < getMinutesFromTime(13, 35))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 3 пара.
    else if (getMinutesFromTime(13, 35) <= minutesInfo && minutesInfo <= getMinutesFromTime(15, 10))
    {
        currentLesson = "Сейчас: 3 пара.";
    }

    else if (getMinutesFromTime(15, 10) < minutesInfo && minutesInfo < getMinutesFromTime(15, 20))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 4 пара.
    else if (getMinutesFromTime(15, 20) <= minutesInfo && minutesInfo <= getMinutesFromTime(16, 50))
    {
        currentLesson = "Сейчас: 4 пара.";
    }

    else if (getMinutesFromTime(16, 50) < minutesInfo && minutesInfo < getMinutesFromTime(17, 00))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 5 пара.
    else if (getMinutesFromTime(17, 00) <= minutesInfo && minutesInfo <= getMinutesFromTime(18, 20))
    {
        currentLesson = "Сейчас: 5 пара.";
    }

    else if (getMinutesFromTime(18, 20) < minutesInfo && minutesInfo < getMinutesFromTime(18, 30))
    {
        currentLesson = "Сейчас: Перемена.";
    }

    // 6 пара.
    else if (getMinutesFromTime(18, 30) <= minutesInfo && minutesInfo <= getMinutesFromTime(19, 50))
    {
        currentLesson = "Сейчас: 6 пара.";
    }

    // Внеучебное время.
    else
    {
        currentLesson = "Сейчас: Внеучебное время.";
    }

    return currentLesson;
}
/* Конец региона. */

/* Регион #3: Функции расчета конца текущего события.  */

/**
 * Рассчитывает время до конца текущего события (пары/собрания и прочего).
 * 
 * @param {any} dateInfo Информация о текущей дате и времени.
 * 
 * @returns Информация о времени до конца текущего события.
 */
function calculateCurrentLessonEndTime(dateInfo)
{
    let endTime = "Время не рассчитано.";

    if (checkToDayIsWorking(dateInfo))
    {
        if (dateInfo.date.day == 3)
        {
            endTime = getEndTimeForWednesday(dateInfo);
        }

        else if (dateInfo.date == 6)
        {
            endTime = getEndTimeForSaturday(dateInfo);
        }

        else
        {
            endTime = getEndTimeForOtherDays(dateInfo);
        }

        // Формируем сообщение для вывода:
        if (endTime != -2)
        {
            if (endTime == -1)
            {
                endTime = "Новая пара скоро начнется.";
            }

            else
            {
                let hours = Math.floor(endTime / 60);
                let minutes = endTime % 60;

                if (hours > 0)
                {
                    endTime = `До конца: ${hours}ч, ${minutes}м.`;
                }

                else
                {
                    endTime = `До конца: ${minutes}м.`;
                }
            }
        }

        else
        {
            endTime = "Учебный день закончен.";
        }
    }

    else
    {
        endTime = "Вот и выходные.";
    }

    return endTime;
}

/**
 * Рассчитывает время до конца пары для среды.
 * 
 * @param {any} dateInfo Информация о текущем времени.
 * 
 * @returns Количество времени до конца в минутах.
 */
function getEndTimeForWednesday(dateInfo)
{
    let calculatedTimeInMinutes;
    let currentTimeInMinutes = getMinutesFromTime(dateInfo.time.hour, dateInfo.time.minute);

    // 0 пара.
    if (getMinutesFromTime(7, 50) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(9, 20))
    {
        calculatedTimeInMinutes = getMinutesFromTime(9, 20) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(9, 20) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(9, 30))
    {
        calculateCurrentLesson = -1;
    }

    // 1 пара.
    else if (getMinutesFromTime(9, 30) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(11, 05))
    {
        calculatedTimeInMinutes = getMinutesFromTime(11, 05) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(11, 05) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(11, 15))
    {
        calculateCurrentLesson = -1;
    }

    // 2 пара.
    else if (getMinutesFromTime(11, 15) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(13, 30))
    {
        calculatedTimeInMinutes = getMinutesFromTime(13, 30) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(13, 30) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(13, 35))
    {
        calculateCurrentLesson = -1;
    }

    // 3 пара.
    else if (getMinutesFromTime(13, 35) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(15, 10))
    {
        calculatedTimeInMinutes = getMinutesFromTime(15, 10) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(15, 10) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(15, 20))
    {
        calculateCurrentLesson = -1;
    }

    // Классный час.
    else if (getMinutesFromTime(15, 20) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(16, 00))
    {
        calculatedTimeInMinutes = getMinutesFromTime(16, 00) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(16, 00) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(16, 10))
    {
        calculateCurrentLesson = -1;
    }

    // 4 пара.
    else if (getMinutesFromTime(16, 10) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(17, 30))
    {
        calculatedTimeInMinutes = getMinutesFromTime(17, 30) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(17, 30) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(17, 40))
    {
        calculateCurrentLesson = -1;
    }

    // 5 пара.
    else if (getMinutesFromTime(17, 40) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(18, 50))
    {
        calculatedTimeInMinutes = getMinutesFromTime(18, 50) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(18, 50) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(19, 00))
    {
        calculateCurrentLesson = -1;
    }

    // 6 пара.
    else if (getMinutesFromTime(19, 00) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(20, 10))
    {
        calculatedTimeInMinutes = getMinutesFromTime(20, 10) - currentTimeInMinutes;
    }

    // Внеучебное время.
    else
    {
        calculatedTimeInMinutes = -2;
    }

    return calculatedTimeInMinutes;
}

/**
 * Рассчитывает время до конца текущего события для субботы.
 * 
 * @param {any} dateInfo Информация о текущем времени.
 * 
 * @returns Количество времени до конца в минутах.
 */
function getEndTimeForSaturday(dateInfo)
{
    let calculatedTimeInMinutes;
    let currentTimeInMinutes = getMinutesFromTime(dateInfo.time.hour, dateInfo.time.minute);

    // 0 пара.
    if (getMinutesFromTime(8, 00) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(9, 20))
    {
        calculatedTimeInMinutes = getMinutesFromTime(9, 20) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(9, 20) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(9, 30))
    {
        calculateCurrentLesson = -1;
    }

    // 1 пара.
    else if (getMinutesFromTime(9, 30) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(10, 50))
    {
        calculatedTimeInMinutes = getMinutesFromTime(10, 50) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(10, 50) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(11, 00))
    {
        calculateCurrentLesson = -1;
    }

    // 2 пара.
    else if (getMinutesFromTime(11, 00) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(12, 20))
    {
        calculatedTimeInMinutes = getMinutesFromTime(12, 20) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(12, 20) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(12, 30))
    {
        calculateCurrentLesson = -1;
    }

    // 3 пара.
    else if (getMinutesFromTime(12, 30) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(13, 50))
    {
        calculatedTimeInMinutes = getMinutesFromTime(13, 50) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(13, 50) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(14, 00))
    {
        calculateCurrentLesson = -1;
    }

    // 4 пара.
    else if (getMinutesFromTime(14, 00) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(15, 20))
    {
        calculatedTimeInMinutes = getMinutesFromTime(15, 20) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(15, 20) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(15, 30))
    {
        calculateCurrentLesson = -1;
    }

    // 5 пара.
    else if (getMinutesFromTime(15, 30) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(16, 50))
    {
        calculatedTimeInMinutes = getMinutesFromTime(16, 50) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(16, 50) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(17, 00))
    {
        calculateCurrentLesson = -1;
    }

    // 6 пара.
    else if (getMinutesFromTime(17, 00) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(18, 20))
    {
        calculatedTimeInMinutes = getMinutesFromTime(18, 20) - currentTimeInMinutes;
    }

    // Внеучебное время.
    else
    {
        calculatedTimeInMinutes = -2;
    }

    return calculatedTimeInMinutes;
}

/**
 * Рассчитывает пару по времени для остальных (обычных) дней.
 * 
 * @param {any} dateInfo Информация о текущем времени.
 * 
 * @returns Номер пары.
 */
function getEndTimeForOtherDays(dateInfo)
{
    let calculatedTimeInMinutes;

    let currentTimeInMinutes = getMinutesFromTime(dateInfo.time.hour, dateInfo.time.minute);

    // 0 пара.
    if (getMinutesFromTime(7, 50) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(9, 20))
    {
        calculatedTimeInMinutes = getMinutesFromTime(9, 20) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(9, 20) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(9, 30))
    {
        calculateCurrentLesson = -1;
    }

    // 1 пара.
    else if (getMinutesFromTime(9, 30) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(11, 05))
    {
        calculatedTimeInMinutes = getMinutesFromTime(11, 05) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(11, 05) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(11, 15))
    {
        calculateCurrentLesson = -1;
    }

    // 2 пара.
    else if (getMinutesFromTime(11, 15) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(13, 30))
    {
        calculatedTimeInMinutes = getMinutesFromTime(13, 30) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(13, 30) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(13, 35))
    {
        calculateCurrentLesson = -1;
    }

    // 3 пара.
    else if (getMinutesFromTime(13, 35) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(15, 10))
    {
        calculatedTimeInMinutes = getMinutesFromTime(15, 10) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(15, 10) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(15, 20))
    {
        calculateCurrentLesson = -1;
    }

    // 4 пара.
    else if (getMinutesFromTime(15, 20) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(16, 50))
    {
        calculatedTimeInMinutes = getMinutesFromTime(16, 50) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(16, 50) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(17, 00))
    {
        calculateCurrentLesson = -1;
    }

    // 5 пара.
    else if (getMinutesFromTime(17, 00) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(18, 20))
    {
        calculatedTimeInMinutes = getMinutesFromTime(18, 20) - currentTimeInMinutes;
    }

    else if (getMinutesFromTime(18, 20) < currentTimeInMinutes && currentTimeInMinutes < getMinutesFromTime(18, 30))
    {
        calculateCurrentLesson = -1;
    }

    // 6 пара.
    else if (getMinutesFromTime(18, 30) <= currentTimeInMinutes && currentTimeInMinutes <= getMinutesFromTime(19, 50))
    {
        calculatedTimeInMinutes = getMinutesFromTime(19, 50) - currentTimeInMinutes;
    }

    // Внеучебное время.
    else
    {
        calculatedTimeInMinutes = -2;
    }

    return calculatedTimeInMinutes;
}
/* Конец региона. */

/* Регион #4: Утилитарные функции. */

/**
 * Вычисляет текущую дату и время.
 * 
 * @returns Объект с данными с текущим временем.
 */
function getNormalDate()
{
    let currentDate = new Date();
    let objectWithDateTimeInfo = new Object();

    objectWithDateTimeInfo.time = new Object();
    objectWithDateTimeInfo.time.minute = currentDate.getMinutes();
    objectWithDateTimeInfo.time.hour = currentDate.getHours();

    objectWithDateTimeInfo.date = new Object();
    objectWithDateTimeInfo.date.day = currentDate.getDay();
    objectWithDateTimeInfo.date.month = currentDate.getMonth() + 1;

    // Так как воскресенье имеет 0 индекс, перемещаем его в конец недели.
    if (objectWithDateTimeInfo.date.day == 0)
    {
        objectWithDateTimeInfo.date.day = 7;
    }

    return objectWithDateTimeInfo;
}

/**
 * Возвращает количество минут, прошедшее с начала суток.
 * 
 * @param {any} hour Текущий час.
 * @param {any} mins Текущая минута.
 * 
 * @returns Количество минут прошедшее с начала суток.
 */
function getMinutesFromTime(hour, mins)
{
    return hour * 60 + mins;
}

/**
 * Проверяет текущую дату на то, является ли текущий день выходным или нет.
 * 
 * @param {any} dateInfo Текущая дата и время.
 * 
 * @returns Логическое значение.
 */
function checkToDayIsWorking(dateInfo)
{
    if (dateInfo.date.month == 7 || dateInfo.date.month == 8)
    {
        return false;
    }

    else if (dateInfo.date.month == 1 && dateInfo.date.day < 12)
    {
        return false;
    }

    else if (dateInfo.date.day == 7)
    {
        return false;
    }

    else
    {
        return true;
    }
}
/* Конец региона. */
