import { Transfer } from "../../types/DameDashStaking/NFTStaking";
import { Nft } from "../../types/schema";
import {
  ADDRESS_ZERO,
  DAMEDASH_AVATAR_NFT_ADDRESS,
} from "../../utils/constant";

export function handleTransfer(event: Transfer): void {
  const nftId =
    DAMEDASH_AVATAR_NFT_ADDRESS + "-" + event.params.tokenId.toString();

  let entity = Nft.load(nftId);
  if (entity == null) entity = new Nft(nftId);

  if (event.params.to == ADDRESS_ZERO) return;

  entity.stake = "active";
  entity.owner = event.params.to;
  entity.tokenId = event.params.tokenId;
  entity.type = "avatar";

  entity.save();
}
