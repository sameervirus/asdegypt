export const capitalizeFirstLetter = (str) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const capitalizeEachWord = (str) => {
  const words = str.split("_");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );
  return capitalizedWords.join(" ");
};

export const toTitleCase = (str) => {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .trim();
};

export const getDistinctObjects = (array) => {
  const uniqueIds = new Set();
  return array.filter((obj) => {
    if (!uniqueIds.has(obj.agent)) {
      uniqueIds.add(obj.agent);
      return true;
    }
    return false;
  });
};

export const decodeHTML = (html) => {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

export const getUniqueTags = (data) => {
  const uniqueTagsSet = new Set();
  data.forEach((item) => {
    if (Array.isArray(item.tags)) {
      item.tags.forEach((tag) => {
        const tagInfo = {
          slug: tag.slug,
          englishName: tag.name_english,
          arabicName: tag.name_arabic,
        };
        uniqueTagsSet.add(JSON.stringify(tagInfo));
      });
    }
  });
  return [...uniqueTagsSet].map(JSON.parse);
};
