import { cn } from '@/lib/utils';
import logoAsset from '@/assets/brand/colegio-deus-connosco-logo.png.asset.json';
import markAsset from '@/assets/brand/colegio-deus-connosco-mark.png.asset.json';

export const SCHOOL_NAME = 'Colégio Deus Connosco';

type BrandVariant = 'lockup' | 'mark' | 'compact';

interface SchoolBrandProps {
  variant?: BrandVariant;
  /** Height of the logo artwork in px */
  size?: number;
  className?: string;
  /** Hide the typeset school name next to the mark (compact variant) */
  hideName?: boolean;
}

export function SchoolBrand({
  variant = 'lockup',
  size,
  className,
  hideName = false,
}: SchoolBrandProps) {
  if (variant === 'mark') {
    return (
      <img
        src={markAsset.url}
        alt={SCHOOL_NAME}
        style={{ height: size ?? 32 }}
        className={cn('w-auto object-contain', className)}
      />
    );
  }

  if (variant === 'compact') {
    return (
      <div className={cn('flex items-center gap-2.5', className)}>
        <img
          src={markAsset.url}
          alt={SCHOOL_NAME}
          style={{ height: size ?? 32 }}
          className="w-auto shrink-0 object-contain"
        />
        {!hideName && (
          <span className="font-heading text-sm font-bold leading-tight tracking-tight text-foreground">
            Colégio
            <br />
            Deus Connosco
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={logoAsset.url}
      alt={SCHOOL_NAME}
      style={{ height: size ?? 72 }}
      className={cn('w-auto object-contain', className)}
    />
  );
}
