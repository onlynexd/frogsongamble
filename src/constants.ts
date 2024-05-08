import { PublicKey } from '@solana/web3.js'
import { FAKE_TOKEN_MINT, PoolToken, TokenMeta, makeHeliusTokenFetcher } from 'gamba-react-ui-v2'

// Get RPC from the .env file or default to the public RPC.
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? 'https://api.mainnet-beta.solana.com'

// Solana address that will receive fees when somebody plays on this platform
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  '7uSEEcSgbtsBC2NTdqE7qKpZifKDFVT2gfCx76BtcVdN'
)

// Gamba explorer URL - Appears in RecentPlays
export const EXPLORER_URL = `https://explorer.gamba.so/`;

// Platform URL - Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'play.gamba.so'

// Creator fee (in %)
export const PLATFORM_CREATOR_FEE = 0.05 // 1% (1/100 = 0.01)

// Jackpot fee (in %)
export const PLATFORM_JACKPOT_FEE = 0.001 // 0.1% (0.1/100 = 0.001)

// Just a helper function
const lp = (tokenMint: PublicKey | string, poolAuthority?: PublicKey | string): PoolToken => ({
  token: new PublicKey(tokenMint),
  authority: poolAuthority !== undefined ? new PublicKey(poolAuthority) : undefined,
})

/**
 * List of pools supported by this platform
 * Make sure the token you want to list has a corresponding pool on https://explorer.gamba.so/pools
 * For private pools, add the creator of the Liquidity Pool as a second argument
 */
export const POOLS = [
  // SOL:
  lp('So11111111111111111111111111111111111111112'),
  // USDC:
  lp('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
  // BONK:
  lp('DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'),
  // JUP:
  lp('JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN'),
  // Fake token:
  lp(FAKE_TOKEN_MINT),
]

// The default token to be selected
export const DEFAULT_POOL = POOLS[0]

/**
 * List of token metadata for the supported tokens
 * Alternatively, we can provide a fetcher method to automatically fetch metdata. See TOKEN_METADATA_FETCHER below.
 */
export const TOKEN_METADATA: (Partial<TokenMeta> & {mint: PublicKey})[] = [
  {
    mint: FAKE_TOKEN_MINT,
    name: 'Fake',
    symbol: 'FROGS',
    image: '/fakemoney.png',
    baseWager: 1e9,
    decimals: 9,
    usdPrice: 0,
  },
  {
    mint: new PublicKey('DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'),
    name: 'Bonk',
    symbol: 'BONK',
    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f617277656176652e6e65742f685169505a4f73525a584758424a645f3832506856646c4d5f68414373545f713677717766356353593749',
    baseWager: 10000 * 1e5,
    decimals: 5,
    usdPrice: 0,
  },
  {
    mint: new PublicKey('JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN'),
    name: 'Jupiter',
    symbol: 'JUP',
    image: 'https://statics.solscan.io/cdn/imgs/s60?ref=68747470733a2f2f7374617469632e6a75702e61672f6a75702f69636f6e2e706e67',
    baseWager: 1e6,
    decimals: 6,
    usdPrice: 0,
  },
]

/**
 * A method for automatically fetching Token Metadata.
 * Here we create a fetcher that uses Helius metadata API, if an API key exists as an environment variable.
 */
export const TOKEN_METADATA_FETCHER = (
  () => {
    if (import.meta.env.VITE_HELIUS_API_KEY) {
      return makeHeliusTokenFetcher(
        import.meta.env.VITE_HELIUS_API_KEY,
        { dollarBaseWager: 1 },
      )
    }
  }
)()
