import { WingDTO } from "@paralogs/shared";
import { WingEntity } from "../entities/WingEntity";

export const wingMapper = {
  entityToDTO: (wingEntity: WingEntity): WingDTO => {
    const wingProps = wingEntity.getProps();
    return {
      ...wingProps,
      id: wingProps.id.value,
      userId: wingProps.userId.value,
    };
  },
};