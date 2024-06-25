import React from "react";

const Map = () => {
  return (
    <div className="mt-[150px]">
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4477.9909401976765!2d37.547854!3d55.862745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b537991f01afa9%3A0x53c1f16b1398a554!2z0JTQvNC40YLRgNC-0LLRgdC60L7QtSDRiC4sIDg1LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTI3MjM4!5e0!3m2!1sru!2sam!4v1719345687051!5m2!1sru!2sam"
            width="650"
            height="600"
            className="rounded-[10px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4477.9909401976765!2d37.547854!3d55.862745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b537991f01afa9%3A0x53c1f16b1398a554!2z0JTQvNC40YLRgNC-0LLRgdC60L7QtSDRiC4sIDg1LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTI3MjM4!5e0!3m2!1sru!2sam!4v1719345687051!5m2!1sru!2sam" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
        <div>
          <iframe
            width="650"
            height="600"
            frameBorder="0"
          >
            Загрузка…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
