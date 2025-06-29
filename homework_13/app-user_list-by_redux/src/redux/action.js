// aункция для создания действия по установке фильтра

export function setFilter(text) {
  return {
    type: "SET_FILTER",   // Тип действия
    payload: text     // Полезная нагрузка — новое значение фильтра
  };
}